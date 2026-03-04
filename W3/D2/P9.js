// immediately invoked function expression(IIFE)
// Without parametr
(function(){
    console.log("Basic IIFE executed immediately");
})();

// With parameter
(function(appName,version){
    console.log("App:",appName,"Version:",version);
})("NodeJs","V22.22.0");

// with return value
const result=(function(){
    const a=10,b=20;
    return a+b;
})();
console.log("Sum is:",result);