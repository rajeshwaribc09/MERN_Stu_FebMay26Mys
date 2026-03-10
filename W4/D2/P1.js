// innerText and textContent
// innertext:visible rendered text only
// textContent:all text nodes regardless of css
// innerHTML:allows reading or writing HTML markup inside an element
const message=document.getElementById("message");
const textContent=document.getElementById("textContentBtn");
const reset=document.getElementById("reset");
document.getElementById("innerTxtBTn").addEventListener("click",function(){
    message.innerText="Updated using innerText";
});
textContent.addEventListener("click",function(){
    message.textContent="Updated using textContentBtn";
});
reset.addEventListener("click",function(){
    message.textContent="Original message";
});
const box=document.getElementById("box");
document.getElementById("innerhtmlBtn").addEventListener("click",function(){
    box.innerHTML=" <strong>Original </strong>";
});


