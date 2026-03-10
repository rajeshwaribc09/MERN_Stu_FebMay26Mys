//getElementById
console.log("Document Object:",document);
console.log("Page title",document.title);
// const heading=document.getElementById("mainheading");
// console.log("Heading text",heading.textContent);

// getElementByClassName
const info=document.getElementsByClassName("info");
const run=document.getElementById("run");


// 
const spanTag=document.getElementsByTagName("span");
run.addEventListener("click",function(){
    for(let i=0;i<info.length;i++){
        console.log(info[i].textContent);
        info[i].style.Color="lightgreen";
    }
    for(let i=0;i<spanTag.length;i++){
        console.log(spanTag[i].textContent);
        spanTag[i].style.backgroundColor="lightgreen";
    }
    // Queryselector:returns the first element matching a css selector
const mainfirstheading=document.querySelector(".mainheading");
mainfirstheading.style.color="red";
});

// Query selector all:returns all elements matching the selector
const tasks=document.querySelectorAll(".task");
// task.style.color="purple";
tasks.forEach(function(task){
task.style.color="purple";
});

