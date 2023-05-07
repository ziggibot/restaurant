import { infoPage } from "./info";
import { menuPage } from "./menu";
import { titlePage } from "./title";

const navSetup = () => {
    const navLoader = document.getElementById('navigation');
    const contentLoader = document.getElementById('content');
    const newNav = document.createElement('nav');
    newNav.innerHTML =
    `
    <ul>
    <li id="title">title</li>
    <li id="info">info</li>
    <li id="menu">menu</li>
    </ul>
    `;
    navLoader.appendChild(newNav);
    let titleButton = document.getElementById("title");
    let infoButton = document.getElementById("info");
    let menuButton = document.getElementById("menu");

    titleButton.addEventListener('click', titlePage);
    infoButton.addEventListener('click', infoPage);
    menuButton.addEventListener('click', menuPage);
}

export { navSetup };