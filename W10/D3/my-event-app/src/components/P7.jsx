//Common from patterns
//Controlled component
//A from input whose values is controlled by the React state
import { useState } from "react";
export function ControlledComponent(){
    const[name, setName] = useState('');
    const[submittedName, setSubmittedName] = useState('');
    //input handler
    const handleChange = (event) => {
        setName(event.target.value);
    };
    //from submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedName(name);
    };
    return(
       <section>
        <h2>Form pattern</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
        <p>You've typed the name as:{name}</p>
        <p>Submitted:{submittedName}</p>
       </section>
            
    );
}