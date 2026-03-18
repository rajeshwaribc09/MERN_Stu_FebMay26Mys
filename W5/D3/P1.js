// Introduction to async/await
function getMessage(){
    return new Promise(function(resolv){
        setTimeout(()=>{
            resolv("Async/await makes promise based code easier to read");
        },1000);
    });
}
async function showMessage(){
    console.log("Loading message...");
    const message=await getMessage();
    console.log(message);
}
showMessage();