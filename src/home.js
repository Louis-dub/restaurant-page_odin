import { book } from './book.js';

const home = document.createElement("div");

home.className = "home-container";
home.innerHTML = `
    <h1>The best meat in Hyrule</h1>
    <p>Explore the wonderful world of Hyrule in search of travel, adventure and treasure. And come and enjoy the best meat you can imagine. Lynel's rib will give you the strength to face the dangers along your path.</p>
`;

const homeBookBtn = document.createElement("button");

homeBookBtn.id = "home-book";
homeBookBtn.innerHTML = 'Book a table';

homeBookBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(book);
});

home.appendChild(homeBookBtn);

export { home };
