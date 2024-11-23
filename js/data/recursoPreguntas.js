//impotamos los archivos necesarios para crear los objetos Pregunta
import { Pregunta } from "../clases/Pregunta.js";
import { preguntas } from './mapPreguntas.js';

export const nuevaPregunta = preguntas.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));