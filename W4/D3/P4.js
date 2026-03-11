const jsonOutput=document.getElementById("jsonOutput");
document.getElementById("saveBtn").addEventListener("click",function(){
    const user={id:101,name:"Raj",role:"developer",skills:["html","css"]};
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonOutput.textContent="user object saved as string to local storage.";
});
document.getElementById("readBtn").addEventListener("click",function(){
    try{
    const up=localStorage.getItem("userProfile");
    console.log(JSON.parse(up));
    console.log(up);
    jsonOutput.textContent="userProfile" + up;
    }
    catch(error){
        jsonOutput.textContent="Json parsing failed";
    }
});