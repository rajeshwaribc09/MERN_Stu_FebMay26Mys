// CreateElement() and appendChild()
const list=document.getElementById("list");
let counter=1;
document.getElementById("addBtn").addEventListener("click",function(){
    const li=document.createElement("li");
    li.textContent="Item"+counter++;
    list.appendChild(li);
});
document.getElementById("rmBtn").addEventListener("click",function(){
    errMessage.textContent="";
    if(list.lastElementChild){
    list.removeChild(list.lastElementChild);
    }
    else{
    errMessage.textContent="no item is to delete";
    }
});