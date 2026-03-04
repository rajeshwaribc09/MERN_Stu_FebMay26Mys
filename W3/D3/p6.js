// Nested Objects
const student={
    firstname:"Santhosh",
    lastname:"Sharma",
    scores:{
        math:80,
        science:83
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstname+" "+this.lastname;
    },
    greet(){
        console.log("Hi",this.fullname());
    },
};
console.log(student.fullname());
student.greet()

// console.log(student.scores.math);
// console.log(student);
