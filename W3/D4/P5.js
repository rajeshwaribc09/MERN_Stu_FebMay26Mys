// Reduce function
let nums=[5,10,15];
let avg=nums.reduce((intermediateSum,current)=>intermediateSum+current,0)/nums.length;
console.log(avg);

// reduce to object count by category
let items=["pen","pencil","pen","eraser"];
let count=items.reduce((intermediateValue,item)=>{intermediateValue[item]=(intermediateValue[item]||0)+1;
    return item;
},{});
console.log(count)
