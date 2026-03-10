// filter method
// let marks=[75,49,56,70,82,51,68];
// let passed=marks.filter(mark=>mark>=70);
// console.log(passed);
// console.log(marks);

let score=[
    {name:"A",marks:56},
    {name:"B",marks:79},
    {name:"C",marks:89},
    {name:"D",marks:58}
];
console.log(score);
let passedStudents=score.filter(mark=>mark.marks>=70).map(s=>s.name);
console.log(" ",passedStudents);
// let names=passedStudents.map(named => named.name);
// console.log(names);

