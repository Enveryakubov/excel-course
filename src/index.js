import './sass/index.scss';

console.log('Hurray!');

const test = document.querySelector('.excel__formula .input');

test.addEventListener('input', (e) => console.log(e.target.innerText));
