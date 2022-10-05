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

h1.innerHTML = 'Este titulo se escribio desde js';

h1.classList.add('title');
input.value = 'Default value from js';

// Create a new element

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

console.log(img);

// Insert the img object into the p with atribute
pid.innerHTML = "";
pid.replaceWith(img)