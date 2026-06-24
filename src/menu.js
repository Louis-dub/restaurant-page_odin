import dubious from './images/dubious-food.png';
import fruits from './images/fruits.jpeg';
import salmon from './images/salmon-meniere.jpeg';
import honey from './images/fruit-honey.jpeg';

const menu = document.createElement("div");

menu.className = "menu-container";

menu.innerHTML = `
    <div class="menu">
        <div class="title">
            <img
                src=${dubious}
                alt="Dubious Food"
                class="food"
            >
            <h3>Dubious Food</h>
        </div>
        <p>This dish contains mystery ingredients. It's up to you to identify them.</p>
    </div>

    <div class="menu">
        <div class="title">
            <img
                src=${fruits}
                alt="Fruit Salad"
                class="food"
            >
            <h3>Fruit Salad</h>
        </div>
        <p>Pieces of apple and banana, as well as the finest durians from Hyrule.</p>
    </div>

    <div class="menu">
        <div class="title">
            <img
                src=${salmon}
                alt="Salmon Menière"
                class="food"
            >
            <h3>Salmon Menière</h>
        </div>
        <p>A lovely salmon, caught with care, and beautifully fatty, to be served with wheat.</p>
    </div>

    <div class="menu">
        <div class="title">
            <img
                src=${honey}
                alt="Honeyed Apple"
                class="food"
            >
            <h3>Honeyed Apples</h>
        </div>
        <p>Apples from Hyrule, accompanied by the honey from our bees.</p>
    </div>
`;

export { menu };