
  const cards = document.querySelectorAll(".projects");

  cards.forEach(card => {

    // When mouse enters
    card.addEventListener("mouseenter", () => {

      // reduce all cards opacity
      cards.forEach(c => {
        c.style.opacity = "0.3";
        c.style.transform = "scale(0.95)";
      });

      // highlight current card
      projects.style.opacity = "1";
      .style.transform = "scale(1.1)";
    });

    // When mouse leaves
    projects.addEventListener("mouseleave", () => {

      // reset all cards
      cards.forEach(c => {
        c.style.opacity = "1";
        c.style.transform = "scale(1)";
      });

    });

  });