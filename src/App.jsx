import { Core_Concepts } from "./data.js";
import './App.css'
import Header from './Components/Header.jsx'


//Header component and check the app() to call the <Header /> component

/* Props concept
this props will be the object
if we use props on the function -- Give the tags with <h1>props.title</h1> 
this method can be given to all tags when props is used.(props - name can be given as our need
function CoreConcepts(props - remove this props and we the objects {}){
  return(
    <li>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
  ) we can alo use this method
}*/
function CoreConcepts({title, description}){
  return(
    <li>
    <h3>{title}</h3>
    <p>{description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
    <Header /> 
      <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul className="concept-list">
      <CoreConcepts 
        title= {Core_Concepts[0].title}
        description ={Core_Concepts[0].description} />
      <CoreConcepts {...Core_Concepts[1]} />
      <CoreConcepts {...Core_Concepts[2]} />
      <CoreConcepts {...Core_Concepts[3]} />
      </ul>
      </section>
        <h2>Time to get started</h2>
      </main>
    </div>
  );
}

export default App;
