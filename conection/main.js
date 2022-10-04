console.log('Esto es desde main.js');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
const pid = document.querySelector('#identifier');
const input = document.querySelector('input');

console.log(h1);
console.log({
    h1,
    p,
    paragraph,
    pid,
    input
})

console.log(input.value);
console.log(document.querySelector('input').value);