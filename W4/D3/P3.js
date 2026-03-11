const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");
document.getElementById("saveBtn").addEventListener("click",function(){
    sessionStorage.setItem("theme",themeInput.value);
    sessionStorage.setItem("username","Rajeshwari B C");
    sessionStorage.setItem("LoggedIn","true");
    console.log("Saved theme:",themeInput.value);
    output.innerText="succesfully stored to sessionstorage";  
    output.style.color="green";
    // console.log(output); or return
});
document.getElementById("readBtn").addEventListener("click",function(){
    const theme=sessionStorage.getItem("theme");
    output.innerText="theme is " + theme;  
    output.style.color="green";
});
document.getElementById("removeBtn").addEventListener("click",function(){
    const theme=sessionStorage.removeItem("LoggedIn");
    output.innerText="Remove 'LoggedIn'";  
    output.style.color="green";
});
document.getElementById("clearBtn").addEventListener("click",function(){
    const theme=sessionStorage.clear();
    output.textContent="deleted the session storage";  
    output.style.color="green";
});