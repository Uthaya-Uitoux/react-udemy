import { coreConcepts } from "./data.js";
import './App.css'
import Header from './Components/Header.jsx'
import CoreConcepts from "./Components/CoreConcepts.jsx";


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

function App() {
  return (
    <div>
    <Header /> 
      <main>
      <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul className="concept-list">
      <CoreConcepts 
        title= {coreConcepts[0].title}
        description ={coreConcepts[0].description} />
      <CoreConcepts {...coreConcepts[1]} />
      <CoreConcepts {...coreConcepts[2]} />
      <CoreConcepts {...coreConcepts[3]} />
      </ul>
      </section>
        <h2>Time to get started</h2>
      </main>
    </div>
  );
}

export default App;
