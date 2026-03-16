console.log("Node JS Architecture demo");
console.log("1.Script started");

// SetTimeOut
setTimeout(()=>{
    console.log("3.Timer callback finished after waiting");
},10000); //1000ms=1second
console.log("2.Script continued without waiting for timer callback");