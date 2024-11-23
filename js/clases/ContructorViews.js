export class ContructorViews {
    constructor() {

    }
    /**
     * Este metodo dibuja las preguntas en pantalla
     * @param {string} text esta es la pregunta a mostrar
     */
    dibujarPregunta(text) {
        const titulo = document.getElementById('pregunta');
        titulo.innerText = text;
    }
    /**
     * Este metodo crea los botones, asigna las opciones y agrega una clase al boton
     * @param {string[]} opciones opciones para la pregunta
     * @param {funtion} callback que ejecuta al memento de hacer click en el botton
     */
    dibujarOpciones(opciones, callback) {
        const contenedor_opcion = document.getElementById('respuesta')
        contenedor_opcion.innerHTML = "";

        for (let i = 0; i < opciones.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => callback(opciones[i])); // agrega evento click y ejecuta funcion
            button.className = 'button';// agrega la clase al boton
            button.innerText = opciones[i]; // agrego el texto al botton

            contenedor_opcion.append(button);//agrego al contenedor de bottones
        }
    }
    
    dibujarProgreso(indicePregunta){
        const progreso = document.getElementById('progreso');
        // para enviar variables ${} es necesario las comillas invertidas ``
        progreso.innerHTML = ` Pregunta ${indicePregunta} de 10`;
    }
    /**
     * 
     * @param {number} puntos 
     */
    dibujarFinal(puntos) {
        const mensaje = `
            <h1>Resultado</h1>
            <h2>Tu puntaje es de: ${puntos}</h2>
        `;
        const elemento = document.getElementById('App');
        elemento.innerHTML = mensaje;
    }

    
}
