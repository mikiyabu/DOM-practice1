const container = document.querySelector('.container');

const p = document.createElement('p');
const h3 = document.createElement('h3');
const div2 = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

p.classList.add(red);
h3.setAttribute('class', blue);
div2.toggle(blackPink);

// p.style.color: red;

p.textContent = "Hey I'm red!";
h3.textContent = "I'm a blue h3!";
h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";

container.appendChild(p, h3);
div2.appendChild(h1, p2);
container.appendChild(div2);
