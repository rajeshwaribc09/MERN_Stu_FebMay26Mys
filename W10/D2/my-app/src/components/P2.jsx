// Custom hooks
// Its a normal Javascript function that uses React hooks inside it.Its name must start with 'use'
// it heps to reuse logic across components

import { useState,useEffect } from "react";

// Why to use it?
// Avoid repeating the same hook logic
// keeps component cleaner
// Makes code easier to understand

// Important things to remember about Custom hooks:
// It does not render JSX themselves
// They return values/functions
// Components use those returned values

// Document title changer:Custom hook which updates the browser tab title whenever the given title changes
export function UseDocumentTitle(title){
    useEffect (()=>{
        document.title=title;
        return()=>{
            document.title='My React app';
        }
    },[title]);
}

// Custom hook:manages a boolean value and provide a reusable toggle function
function useToggle(initialValue=false){
    const [value,setValue]=useState(initialValue);

    const toggle=()=>{
        setValue((prev)=>!prev);
    };
    return [value,toggle];
}

export function CustomHooksIntro(){
    const [count,setCount]=useState(0);

    const [isVisible,toggleVisible]=useToggle(true);

    UseDocumentTitle(`Count is ${count}`);

    return(
        <section>
            <h2>Custom Hooks Introduction</h2>
            <div style={{marginBottom:'10px'}}>
            <h3>Counter Example</h3>
            <p>Count:{count}</p>
            <button onClick={()=>setCount((prev)=>prev+1)}>Increment count</button>
            </div>
             <div style={{marginBottom:'10px'}}>
                <h3>Toggle example</h3>
                <button onClick={toggleVisible}>{isVisible ? 'Hide message' :'Show message'}</button>
                {isVisible && (
                    <p>This visibility is controlled by a custom hook.</p>
                )}
             </div>
        </section>
    )
}