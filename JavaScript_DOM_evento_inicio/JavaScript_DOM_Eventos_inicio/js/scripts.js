// QuerySelector
const heading = document.querySelector('.header__texto h2') // 0 a 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

//QuerySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto Para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace  = document.createElement('A')

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)



console.log(nuevoEnlace);


 
// Eventos

console.log(1);

window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
});


console.log(5);


window.onscroll = function() {
    console.log('Scrolling...');
}


// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();

    //Validar un formulario

    console.log('enviando formulario');
});

// Eventos de los inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; // Corta la ejecucion del codigo
    }

    // Enviar el formulario
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    //console.log(e.target.value);
      datos[e.target.id] = e.target.value;

      // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

     //desaparezca despues de 5 segundos
     setTimeout(() => {
        alerta.remove();
    }, 5000);
}
