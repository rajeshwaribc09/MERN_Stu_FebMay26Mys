document.addEventListener("DOMContentLoaded",function(){
    // Render skills
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    renderProjects();
    exportData();
});
alert("Welcome to Rajeshwari's Portfolio!");
// visitor's count
let visits = localStorage.getItem("visits") || 0;
visits++;

localStorage.setItem("visits", visits);
document.getElementById("visits").innerText = visits;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    cards.forEach(c => c.style.opacity = "0.3");
    card.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach(c => c.style.opacity = "1");
  });
});
function exportData(){
  const data = {
    name: "Rajeshwari",
    skills: ["JS","React"]
  };

  const blob = new Blob([JSON.stringify(data)], {type:"application/json"});
  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);
  a.download = "portfolio.json";
  a.click();
}
