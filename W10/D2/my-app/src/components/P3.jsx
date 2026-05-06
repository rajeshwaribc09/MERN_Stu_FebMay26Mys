// useRef hook
// useRef cretates a mutable object
// The object has one property: current
// It persists across renders

import { useRef, useState ,useEffect } from "react";

// Why do we use it?
// Direct DOM access
// Persist values without triggering re-renders

export function UseRefIntro() {
    // 1 Reference : DOM : This  will point to the input element

    const inputRef = useRef(null);

    // 2 Value reference : This stores the previous count value. Changing it does not re-render the UI by itself

    const previousCountRef = useRef(0);

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    useEffect(() => {
        previousCountRef.current = count;
    },[count]);

    const handelFocusInput = () =>{
        inputRef.current.focus();
    };
    const handelIncrement = () =>{
        setCount((prev)=>prev+1);
    };
    return(
        <section>
            <div>
                <h3>focus input using useref</h3>
                <input type="text" value={text} ref={inputRef} 
                   onChange={(e)=>setText(e.target.value)} placeholder="Enter something" />
                   <button onClick={handelFocusInput}>
                    Focus Input
                   </button>
            </div>
            <div>
                <h3>2. Store previous value using useRef</h3>
                <p>current count:{count}</p>
                <p>previous count:{previousCountRef.current}</p>
                <button onClick={handelIncrement}>Increment count</button>
            </div>
            </section>
    )
}