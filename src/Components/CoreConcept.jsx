import CoreConcepts from "./CoreConcepts.jsx"// If the file is inside the folder than use "./"
import {coreConceptsList} from "../data.js"; // If the data.is file is outoff the folder than use "../" 
import Section from "./Section.jsx";

const CoreConcept=()=> {

    const conceptBody =  <ul className="concept-list">
            {coreConceptsList.map((data, i)=> (
                <CoreConcepts title={data.title} description={data.description} key={i} />
            ))}
        </ul>
    
    return(
        <Section id="core-concepts" title="Core Concepts" body={conceptBody} />
    )
}

export default CoreConcept