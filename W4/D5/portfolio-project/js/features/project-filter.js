function renderProjects() {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) {
        console.log("project container not found");
        return;
    }
    projectsContainer.innerHTML = "";
    projectsData.forEach(function(project) {
        const card = document.createElement("div");
        card.className = "p-8 text-center bg-gray rounded-3xl shadow-lg bg-gray-200";

        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex item-center justify-center";

        //create icon text
        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = project.name;
        iconBox.appendChild(iconText);

        // const name = document.createElement("h3");
        // name.className = "text-xl font-bold mb-2";
        // name.textContent = project.name;

        const category = document.createElement("span");
        category.className = "text-sm bg-gray-200 px-3 py-1 rounded";
        category.textContent = project.category;

        const desc = document.createElement("p");
        desc.className = "text-gray-600 mb-4";
        desc.textContent = project.description;

        const technologies = document.createElement("p");
        technologies.className = "text-sm bg-gray-200 px-3 py-1 rounded";
        technologies.textContent = project.technologies;

        const status = document.createElement("span");
        status.className = "text-sm bg-gray-200 px-3 py-1 rounded";
        status.textContent = project.status;

        const liveDemo = document.createElement("span");
        liveDemo.className = "text-sm bg-gray-200 px-3 py-1 rounded";
        liveDemo.textContent = project.liveDemo;

        const github = document.createElement("span");
        github.className = "text-sm bg-gray-200 px-3 py-1 rounded";
        github.textContent = project.github;

        card.appendChild(category);
        card.appendChild(desc);
        card.appendChild(technologies);
        card.appendChild(status);
        card.appendChild(liveDemo);
        card.appendChild(github);
        projectsContainer.appendChild(card);
        
    });
     console.log("projects rendered successfully");
}

