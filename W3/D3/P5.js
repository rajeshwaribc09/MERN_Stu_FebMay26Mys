//basics of objects
const person={
    name:"Rahul",
    age:30,
    isStudent:false
};
// console.log("Person:",person);
// console.log("Name:",person.name);
// console.log("Age:",person["age"]);

// add a new property
person.city="mysore";
console.log("Person:",person);
// modify
person.age=21;
console.log("Person:",person);
// delete
delete person.isStudent;
console.log("Person:",person);

// object constructor
const car=new Object();
car.make="Audi";
car.model="A4";
car.year=2026;
console.log(car);
