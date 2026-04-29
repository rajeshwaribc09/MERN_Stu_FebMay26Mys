// Passing functions as Props
// Alao called as "callback props"
// Child components has to invoke parent logic
function ChildButton({onGreet}){
    return(
        <button onClick={onGreet}>
            Invoke parent button
        </button>
    )
}
export function FunctionProps(){
    const greet=()=>alert('Hello from parent function');
    return(
        <>
            <h2>Passing functions as Props</h2>
            <ChildButton onGreet={greet}/>
        </>
    )
}