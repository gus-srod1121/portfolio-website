import { projects } from '../data/projects.js';

function calculateMainTopMargin()
{
    const header = document.querySelector("header");
    const navbar = document.querySelector("nav");
    
    const main = document.querySelector("main");
    const top_margin = header.offsetHeight - navbar.offsetHeight;
    
    main.style.marginTop = `${top_margin}px`;
}

function displayProjects()
{
    const projectContainer = document.querySelector("#projects");
    const template = document.querySelector("#project-template");

    projects.forEach(project => {
        const projectInstance = template.content.cloneNode(true);

        projectInstance.querySelector(".project-title").textContent = project.name;
        projectInstance.querySelector(".project-desc").textContent = project.desc;
        projectInstance.querySelector(".project-tools").textContent = project.tools;

        const img = projectInstance.querySelector(".project-img");
        img.src = project.img;

        projectContainer.appendChild(projectInstance);
    })
}


function setup()
{
    calculateMainTopMargin();
    displayProjects();
}

setup();