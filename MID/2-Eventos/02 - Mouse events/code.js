                                // MOUSE EVENTS
/* 
click - ocurre con un click
dbclick - ocurre con un doble click
mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
mouseout - ocurre cuandose mueve el puntero fuera de un elemento o de sus elementos secundarios

contextmenu - ocurre con un click del boton derecho en un elemento para abrir un menu
mouseleave - ocurre cuando el puntero se mueve fuera de un elemento
mouseenter - ocurre cuando el puntero se mueve sobre, o entrando, a un elemento
mouseup - ocurre cuando un usuario suelta un boton del mouse sobre un elemento
mousedown - ocurre cuando un usuario presiona un boton del mouse sobre un elemento
mousemove - ocurre cuando el puntero se mueve mientras esta sobre un elemento



EJEMPLO:
*/

const button = document.querySelector(".button");
const contenedorR = document.querySelector(".contenedorR");
const contenedorA = document.querySelector(".contenedorA");
const dblclick = document.querySelector(".dblclick");

contenedorR.addEventListener("click", (e)=>{
    alert("di click en el contenedor");
});

/* button.addEventListener("click", (e)=>{
    alert("di click en el boton");
}); */

// por bubbling da click primero en el boton y despues en el contenedor, pero se resuelve con stopPropagation.

button.addEventListener("click", (e)=>{
    alert("di click en el boton");
    e.stopPropagation();
});



                        // DOUBLECLICK o DBLCLICK

dblclick.addEventListener("dblclick", (e)=> {
    alert("di doble click en el contenedor verde");
});


                            // OVER & OUT
const over = document.querySelector(".over");
const out = document.querySelector(".out");

over.addEventListener("mouseover", (e) =>{
    alert("El mouse esta DENTRO del contenedor verde");
});

out.addEventListener("mouseout", (e)=>{
    alert("El mouse esta FUERA del contenedor dentro del contenedor verde");
});


                        // CONTEXTMENU
const contextmenu = document.querySelector(".conmenu");

contextmenu.addEventListener("contextmenu", (e)=>{
    alert("Se HA PRESIONADO el boton derecho del mouse");
});



                            // MOUSEENTER
const en = document.querySelector(".enter");

en.addEventListener("mouseenter",(e)=>{
    alert("El mouse ESTÁ DENTRO del contenedor bordó");
});



                            // MOUSELEAVE
const leave = document.querySelector(".leave");

leave.addEventListener("mouseleave",(e)=>{
    alert("El puntero SALIÓ del contenedor verde oscuro");
});


                            // MOUSEUP
const up = document.querySelector(".up");

up.addEventListener("mouseup", (e)=>{
    alert("Se SOLTÓ el boton izquierdo del mouse dentro del contenedor gris");
});


                            // MOUSEDOWN
const down = document.querySelector(".down");

down.addEventListener("mousedown", (e)=>{
    alert("Se APRETÓ el boton izquierdo del mouse dentro del contenedor negro");
});


                            // MOUSEMOVE
const move = document.querySelector(".move");

move.addEventListener("mousemove",(e)=>{
    alert("El mouse SE ESTÁ moviendo dentro del contenedor azul oscuro");
});