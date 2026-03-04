//recursive function 
// a function which calls itself

function fact(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log("factorial is",fact(3));