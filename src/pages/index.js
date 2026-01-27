import { projects, categories } from '../data/projectData.js';
import { music } from '../data/musicData.js'

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
    const projectContainer = document.querySelector("#project-container");
    const template = document.querySelector("#project-template");

    // const mainProjects = projects.filter(project => project.categories.includes(categories.MAIN));
    const mainProjects = projects;
    // console.log(mainProjects);

    mainProjects.forEach(project => {
        const projectInstance = template.content.cloneNode(true);

        projectInstance.querySelector(".project-title").textContent = project.name;
        projectInstance.querySelector(".project-desc").textContent = project.desc;
        projectInstance.querySelector(".project-tools").textContent = project.tools.join(", ");

        const img = projectInstance.querySelector(".project-img");
        img.src = project.img;

        projectContainer.appendChild(projectInstance);
    })
}

function displayMusic()
{
    const musicContainer = document.querySelector("#music-container");
    const template = document.querySelector("#music-template");

    music.forEach(song => {
        const songInstance = template.content.cloneNode(true);

        songInstance.querySelector(".music-name").textContent = song.name;
        const musicPlayer = songInstance.querySelector(".music-player");
        musicPlayer.src = song.audioFilePath;
        musicPlayer.volume = song.startingVolume * 0.01;

        musicPlayer.addEventListener("play", (event) => {
            const allPlayers = document.querySelectorAll(".music-player");
            
            allPlayers.forEach(player => {
                if (player !== event.target)
                {
                    player.pause();
                }
            });
        });

        musicContainer.appendChild(songInstance);
    })
}


function setup()
{
    calculateMainTopMargin();
    displayProjects();
    displayMusic();
}

setup();