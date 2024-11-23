//crear una clase pregunta que recibira la info de mapaPreguntas para crear un objeto. vamos a exportar esta clase

export class Pregunta {
    /**
     * esta info viene del mapaPreguntas
     * @param {string} textoPregunta mapaPregunta.pregunta
     * @param {string[]} opciones mapaPregunta.opciones
     * @param {string} respuesta mapaPregunta.respuesta
     */
    constructor(textoPregunta, opciones, respuesta) {
        this.textoPregunta = textoPregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }
    /**
     * Funcion para saber si la respuesta seleccionada por el usario es igual a this.respuesta
     * @param {string} respuesta Esta es la opcion seleccionada por el usario
     * @returns retorna true o false.
     */
    respuestaCorrecta(respuesta) {
        return respuesta === this.respuesta;
    }
}