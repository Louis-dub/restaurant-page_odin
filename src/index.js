import './styles.css'
import logo from './images/logo.png';

import { home } from './home.js';
import { menu } from './menu.js';

// Add Logo
document.addEventListener("DOMContentLoaded", () => {
    const logoNav = document.getElementById("logo");

    if (logoNav)
        logoNav.src = logo;
    const logoLink = document.createElement("link")
    logoLink.rel = "icon";
    logoLink.type = "image/png";
    logoLink.href = logo;
    document.head.appendChild(logoLink);
});

const content = document.getElementById("content");

const logoBtn = document.querySelector(".name");
const homeBtn = document.getElementById("home");

const menuBtn = document.getElementById("menu");

const homeBookBtn = document.getElementById("home-book");
const bookBtn = document.getElementById("book");

content.innerHTML = "";
content.appendChild(home);

logoBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home);
});

homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(home);
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu);
})