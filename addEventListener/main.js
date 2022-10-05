
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Escucha eventos en el boton
btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const result = parseInt(input1.value) + parseInt(input2.value);
    //alert(`El valor de la suma es ${result}`);
    pResult.innerText = 'Resultado: ' + result;
}