import { projects } from "./data/projects.js";
import { renderProjects } from "./components/renderProjects.js";
import { showMenu } from "./ui/showMenu.js";

const projectsContainer = document.getElementById("projects-container");

renderProjects(projectsContainer, projects);
showMenu();