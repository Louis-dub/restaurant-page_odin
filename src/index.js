import './styles.css'
import logo from './images/logo.png';

document.addEventListener("DOMContentLoaded", () => {
    const logoNav = document.getElementById("logo");

    if (logoNav)
        logoNav.src = logo;

    const logoLink = document.createElement("link");
    logoLink.rel = "icon";
    logoLink.type = "image/png";
    logoLink.href = logo;
    document.head.appendChild(logoLink);
})