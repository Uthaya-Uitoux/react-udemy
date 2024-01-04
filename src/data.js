export const Core_Concepts=[
    {
        title:"Components",
        description:" The core UI building block"
        /* 
        Creating the seperate file to give the data and that will be called in the main file
        We can use these 3 methods to call the details of the props.
        image can be stored in one file we can import the file name in this file and get the image in the same way*/
    },
    {
        title:"props",
        description:" This coreconcept methods can be used in 3 different ways.callig the finction by <core_concept[0].title.for this refer the code"
       /* Method 1
       <CoreConcepts 
        title= {Core_Concepts[0].title}
        description ={Core_Concepts[0].description} />*/
    },
    {
        title:"jsx",
        description:" In this we can use Rest/ Spread operator <CoreConcept {...Core_Concepts[0]}/>"
    /* We can use this method to optimise the code
       Method 2
      <CoreConcepts {...Core_Concepts[0]} />
      <CoreConcepts {...Core_Concepts[1]} />
      <CoreConcepts {...Core_Concepts[2]} />
      <CoreConcepts {...Core_Concepts[3]} />*/
    },
    {
        title:"State",
        description:" This is the another method (Destructuring method) to call the component "
    /*function CoreConcepts({title, description}){
  return(
    <li>
    <h3>{title}</h3>
    <p>{description}</p>
    </li>
  )*/
    }
]