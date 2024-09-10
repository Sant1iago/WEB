                                // EVENTOS DE LA INTERFAZ
/* 
    error - ocurre cuando sucede un error durante la carga de un archivo multimedia
    load  - ocurre cuadno un objeto se ha cargado
    beforeunload  -  ocurre antes de que el documento esté a punto de descargarse
    unload - ocurre cuando un objeto se ha descargado
    resize - ocurre cuando se cambia el tamaño de la vista del documento
    scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento
    select - ocurre despues de que el usuario selecciona algun texto de <input> o <textarea>
*/


                                // ERROR
/* Cargo una imagen en documento HTML */

const img = document.querySelector(".fondito");


img.addEventListener("error", ()=>{
    console.log("Error al cargar la imagen");
});

// En caso de que ocurra un error, se ejecuta en consola el mensaje




                                // LOAD

window.addEventListener("load",()=>{
    console.log("El sitio se ha cargado");
});

// El mensaje sale en consola al terminar de cargar la ventana, el window no es necesario del todo, se puede sacar y funciona de la misma manera

                    // OTRA MANERA
/*  addEventListener("load",()=>{
    console.log("El sitio se ha cargado");
});
 */



                                // BEFOREUNLOAD
/* Agrego un enlace despues de la imagen */

addEventListener("beforeunload",()=>{
    console.log("Te estas por ir del sitio");
});

// Antes de salir del sitio el mensaje sale en consola



                                // UNLOAD

addEventListener("unload",()=>{
    console.log("Te estas por ir del sitio");
});


// Son avisos de cuando te estas por ir del sitio y antes de que te vayas del sitio
// Sirven para saber cuando un usuario esta por salir o ya salio del sitio





                                // RESIZE
/* Avisa cuuando cambia el tamaño de vista del documento */


addEventListener("resize",()=>{
    console.log(`Se actualizó la resolucion de la vista del documento`);
});




                                // SCROLL

addEventListener("scroll",()=>{
    console.log("Se ha hecho scroll");
});

// Se lo puede poner en lugares especificos como dentro de un div



                                // SELECT

const input = document.querySelector(".input-prueba");

/* input.addEventListener("select",()=>{
    console.log("Input seleccionado");
}); */


// Asi solo avisa que fue seleccionado algo del elemento

// Agrego la "e" como parametro, ahora muestra mas informacion, siguiendo el camino que hay que hacer para llegar a startSelection y endSelection, lo hago en la parte de consola para que me muestren sus posiciones.

                                // selectionStart
input.addEventListener("select",(e)=>{
    console.log("La seleccion empieza en la posicion: " + e.target.selectionStart);
});

                                // selectionEnds
input.addEventListener("select",(e)=>{
    console.log("La seleccion termina en la posicion: " + e.target.selectionEnd);
});



// Para mostrar lo que se seleccionó 
/* Creo un div que va a servir de pantalla */

const contenedor = document.querySelector(".contenedor");

input.addEventListener("select", (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    // cadena de texto
    let texto = input.value;
    contenedor.innerHTML = texto.substring(start, end);
});



// Se puede hacer con cualquier propiedad anterior
const contenedor2 = document.querySelector(".contenedor2");

input.addEventListener("keyup", (e)=>{
    let tecla = e.key; //me dice cual es la tecla presionada
    nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`;
    contenedor2.innerHTML = nuevoContenido;
});


