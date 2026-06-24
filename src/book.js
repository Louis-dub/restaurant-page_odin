import terry from './images/terry.jpeg';

const book = document.createElement("div");

book.className = "book-container";

book.innerHTML = `
    <p>
        Go to the nearest stop-off point and speak to Terry.
        He will show you the way and send us a message to let us know you're on your way.
        <br>If you don't follow these instructions, you won't be able to eat here.
    </p>
    <img
        src=${terry}
        alt="Terry"
    >
`;

export { book };
