//MAPA DE CELDAS
const inputCeldaMap = {
    'nombre': 'celda-1',
    'apellido': 'celda-2',
    'email': 'celda-3',
    'celular': 'celda-4',
    'edad': 'celda-5',
    'direccion': 'celda-6',
    'provincia': 'celda-7',
    'cp': 'celda-8',
    'correo': 'celda-9',
    'postal': 'celda-9',
    'telefono': 'celda-9',
    'noticias': 'celda-10',
    'promociones': 'celda-10',
    'alertas': 'celda-10',
    'eventos': 'celda-10'
};

let input_form = null;

// Capturar el input actual cuando recibe el foco
document.addEventListener('focusin', function(event) {
    input_form = event.target;
});

// Cuando el input pierde el foco, guardar su valor en la celda correspondiente
document.addEventListener('focusout', function(event) {
    if (input_form && input_form.value) {
        const celdaId = inputCeldaMap[input_form.id];
        if (celdaId) {
            const celda = document.getElementById(celdaId);
            celda.textContent = input_form.value;
        }
    }
    input_form = null;
});