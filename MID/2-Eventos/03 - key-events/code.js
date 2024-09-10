                                // KEY EVENTS
/* 
keypress - ocurre cuando una tecla se presiona
EJEMPLO

input.addEventListener("keypress", (e) =>{
    console.log("un usuario presiono una tecla");
});


keydown - ocurre cuando una tecla se deja de presionar
EJEMPLO

input.addEventListener("keydown", (e) =>{
    console.log("una tecla fue presionada");
});


onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
EJEMPLO

input.addEventListener("onkeyup", (e) =>{
    console.log("una tecla fue presionada y soltada");
});


            EXTRA
keyup - ocurre cuando una tecla se presiona y se suelta
EJEMPLO

input.addEventListener("keyup", (e) =>{
    console.log("una tecla fue soltada");
});
*/


const contenedor1 = document.querySelector(".contenedor1");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown", (e) =>{
    console.log("Una tecla fue presionada");
});

input.addEventListener("keypress", (e)=>{
    console.log("Un usuario presionó y soltó una tecla");
});

input.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada");
});