// try catch basics
// const error=document.getElementById("error");
//     error.innerHTML= "Trying";
try{
    console.log("Trying to access undefined variable");
    console.log(notDefined);
}
catch(err){
    console.log("Error caught",err.name,"-",err.message);
}
console.log("Program execution continues");
// JSON Parsing error
let jsontext="{json}";
try{
    let data=JSON.parse(jsontext);
    console.log(data);
}
catch(err){
    console.log("Json parse error",err.message);
}
try{
    let num=10;
    num();
}
catch(err){
    console.log("Caught error",err.name);
}

