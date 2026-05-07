// useCallback with Event handlers

import { useCallback } from "react";
import { memo, useState } from "react";

const ChildButton=memo(function ChildButton({onClick}){
    console.log("Child button rendered");

    return(
        <button onClick={onClick}>Increment</button>
    );
});

export function UseCallbackEvents(){
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        setCount((prevCount)=>prevCount+1);
    },[]);
    return(
        <section>
            <h2>useCallback in events example</h2>
            <p>Count:{count}</p>
            <ChildButton onClick={handleClick}/>
        </section>
    )
}