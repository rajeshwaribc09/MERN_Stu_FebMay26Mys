const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");
document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("username","Rajeshwari B C");
    localStorage.setItem("LoggedIn","true");
    console.log("Saved theme:",themeInput.value);
    output.innerText="succesfully stored to localstorage";  
    output.style.color="green";
    // console.log(output); or return
});
document.getElementById("readBtn").addEventListener("click",function(){
    const theme=localStorage.getItem("theme");
    output.innerText="theme is " + theme;  
    output.style.color="green";
});
document.getElementById("removeBtn").addEventListener("click",function(){
    const theme=localStorage.removeItem("LoggedIn");
    output.innerText="Remove 'LoggedIn'";  
    output.style.color="green";
});
document.getElementById("clearBtn").addEventListener("click",function(){
    const theme=localStorage.clear();
    output.textContent="deleted the local host";  
    output.style.color="green";
});