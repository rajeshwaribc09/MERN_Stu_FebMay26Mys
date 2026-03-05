//Array basics
console.log("Array basics");
//creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"Gola"},[5,6]];
console.log(mixedArray);
console.log(numArray);
console.log(emptyArray);

// using constructor
let fruits=new Array("Apple","Mango");
console.log(fruits);
console.log("is fruits is an array?",Array.isArray(fruits));
// Push
fruits.push("guava");
console.log(fruits);
// Pop it is always deletes the last element in the array
fruits.pop();
console.log(fruits);
// Unshift:adds element to the beginning
fruits.unshift("Orange");
console.log(fruits);
// shift:remove from beginning
fruits.shift();
console.log(fruits);