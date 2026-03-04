//  Callback functions *
// Is a function which is passed as an argument to another function

function greetUser(name,callback){
    console.log("Hello,",name);
    callback();
}
greetUser("Rajeshwari",function(){
    console.log("Callback functions executed");
});