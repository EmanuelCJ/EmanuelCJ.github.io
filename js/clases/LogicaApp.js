//@ts-check
import { Pregunta } from './Pregunta.js'

export class LogicaApp {
    indice = 0;
    puntos = 0;
    /**
     * 
     * @param {Pregunta[]} Pregunta 
     */
    constructor(Pregunta) {
        this.pregunta = Pregunta;
    }
    /**
     * objeto Pregunta actual
     * @returns {Pregunta} retorna la pregunta actual
     */
    getPregunta() {
        return this.pregunta[this.indice]
    }
    /**
     * guess
     * @param {string} respuestaUsuario verifica si el usuario escogi correctamente de ser devuelve true y suma puntos.
     */
    turno(respuestaUsuario) {
        console.log(respuestaUsuario)
        if (this.getPregunta().respuestaCorrecta(respuestaUsuario)) {
            this.puntos++
        }
        this.indice++;
    }
    /**
     * isended
     * @returns un boleano despues de 10 turnos
     */
    finTurno(){
        return this.indice === 10 ? true : false;
    }
}