// Mostrar dimension de la pantalla, y preguntar a cofla si quiere o no comprarlo

let alto = window.screen.availHeight;
// availHeight o width es el alto o ancho que puede tener el navegador al estar maximizado, otra forma de dar esos valores es solo poner height o width, eso nos daría el alto o ancho total de la pantalla
let ancho = window.screen.availWidth;

let comprar = confirm(`El alto es: ${alto} y el ancho es de ${ancho}`);


if (comprar){
    alert("Has comprado el producto");
} else {
    alert("No has comprado el producto");
}