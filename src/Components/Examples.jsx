import {useState} from 'react';
import { EXAMPLES } from "../data.js"
import TabButton from "./TabButton.jsx"



/**Forwarding props to the wrapped element
  - Adding the rest property for the TabButton and change the onClick instead of onSelect option
    <TabButton isSelected ={selectedTopic === "Component"} onClick={ ()=> handleClick('Component')}>Component</TabButton>
    <TabButton isSelected ={selectedTopic === "JSX"} onClick={()=> handleClick('JSX')}>JSX</TabButton>

   - This is how we change the rest proprty in button component. in previous we have used onselect in the place of ...props 

   export default function TabButton({children,isSelected, ...props}){
    return(
        <li>
        <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
        );
}
 */
export default function Examples(){
    const [selectedTopic, setSelectedTopic]= useState();
  
  function handleClick(selectedButton){
    //selectedButton should be any 1 of this [ component, jsx, props, state]
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
    return(
        <section id ="Examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected ={selectedTopic === "Component"} onClick={ ()=> handleClick('Component')}>Component</TabButton>
            <TabButton isSelected ={selectedTopic === "JSX"} onClick={()=> handleClick('JSX')}>JSX</TabButton>
            <TabButton isSelected ={selectedTopic === "Props"} onClick={()=> handleClick('Props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic === "State"} onClick={()=> handleClick('State')}>State</TabButton>
          </menu>
          {!selectedTopic&& <p>Please select the Title</p>}
          {selectedTopic && 
            <div id="tab-content">
              <p>{EXAMPLES[selectedTopic].Title}</p>
              <p>{EXAMPLES[selectedTopic].Description}</p>
            </div>
          } 
        </section>
    )

}