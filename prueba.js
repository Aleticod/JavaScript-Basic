nombre = 'Harvey';
apellido = 'Pfoccori';

dineroAhorrado = 500;
deudas = 100;

nombreCompleto = `${nombre} ${apellido}`;
dineroReal = dineroAhorrado - deudas;
console.log(nombreCompleto);
console.log(dineroReal);

/**
 * 
 * @param {*} name 
 * @param {*} lastname 
 * @param {*} nickname 
 */
const user = (name, lastname, nickname) => {
    const completeName = name + ' ' + lastname;
    console.log('Mi nombre es ' + completeName + ', pero prefiero que me digas ' + nickname + '.');
}

user('Juan David', 'Casto Gallegos', 'JuanDC');

suscription = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casitodos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un anio',
    ExperPlus: 'Tu y alguien mas pueden tomar Todos los cursos de Platzi durante un anio'
}

const tipoDeSuscription = 'Basic';

if ( suscription[tipoDeSuscription]) {
    console.log(suscription[tipoDeSuscription]);
}

function imprimirPrimerElemento(array) {
    console.log(array[0]);
}

imprimirPrimerElemento(['juanita', 'lilia', 'roberto']);

function imprimirElementos(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

imprimirElementos(['juanita', 'lilia', 'roberto']);


suscription = {
    Free: 'Solo puedes tomar los cursos gratis',
    Basic: 'Puedes tomar casitodos los cursos de Platzi durante un mes',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un anio',
    ExperPlus: 'Tu y alguien mas pueden tomar Todos los cursos de Platzi durante un anio'
}

// Transformacion los valores de un objeto a un array
arrayValues = Object.values(suscription);

// Transformacion los key en un array
arrayKeys = Object.keys(suscription);

// Trasformacoin un objeto en un array
arrayFromObject = Object.entries(suscription);


