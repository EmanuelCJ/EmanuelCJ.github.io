//importamos el archivo si o si con js 
import { nuevaPregunta } from './data/recursoPreguntas.js'
import { LogicaApp } from './clases/LogicaApp.js'
import { ContructorViews } from './clases/ContructorViews.js';

/**
 * 
 * @param {ContructorViews} views 
 * @param {LogicaApp} juego 
 * @param {}
 */
const siguenteTurno = (views, juego) => {
    if (juego.finTurno()) {
        views.dibujarFinal(juego.puntos)
    } else {
        views.dibujarPregunta(juego.getPregunta().textoPregunta)
        views.dibujarOpciones(juego.getPregunta().opciones, (opcionElegida) => {
            juego.turno(opcionElegida);
            siguenteTurno(views, juego);
        });
        views.dibujarProgreso(juego.indice+1);
    }
};
function main() {

    const juego = new LogicaApp(nuevaPregunta);
    const views = new ContructorViews();

    siguenteTurno(views, juego)
}

main();