document.write ("<b style='text-align:center'>" + "METODOS TRANSFORMADORES" + "</b>");
document.write('<br>');
let nombres = ["mili", "miguel", "marta"];
// elimina el ultimo elemento del array y lo muetra.
document.write("El array es:");
document.write('<br>');
document.write(nombres);
document.write('<br>');
let resultadoPop = nombres.pop();
document.write('<b>' + resultadoPop + '</b>' + " es el nombre eliminado");
document.write('<br>');
document.write("El array quedó así");
document.write('<br>');
document.write('<b>' + nombres + '</b>');

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b> SHIFT </b>');
document.write('<br>');
document.write("Hace lo mismo que pop pero elimina el primer elemento del array");
document.write('<br>');
document.write('<br>');
document.write('<br>');

document.write('<b>' + "PUSH" + '</b>');
document.write('<br>');
document.write('Es para agregar un elemento al final del array y lo que devuelve como valor es el numero de elementos dentro del array o la posicion del nuevo elemento agregado');

let nombresPush = ["Milagros", "Belen", "Molero", "Allende"];
document.write('<br>');
document.write('<br>');

document.write("Este es el array por defecto: " + '<b>' + nombresPush + '</b>');
document.write('<br>');

resultadoPush = nombresPush.push("Yo");
document.write('<br>');
document.write("Cantidad o lugar: " + '<b>' + resultadoPush + '</b>');
document.write('<br>');
document.write('<br>');
document.write("Nuevo array despues de push: " + '<b>' + nombresPush + '</b>');

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "REVERSE" + '</b>');
document.write('<br>');
document.write("Revierte el orden de los elementos del array");
document.write('<br>');
let numerosRever = [1,2,3,4,5];
document.write('<br>');
document.write("Este es el array por defecto: " + '<b>' + numerosRever + '</b>');
document.write('<br>');
resultadoRever = numerosRever.reverse();
document.write('<br>');
document.write("Array despues de reverse: " + '<b>' + resultadoRever + '</b>');
document.write('<br>');


document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "UNSHIFT" + '</b>');
document.write('<br>');
document.write("Hace lo mismo que push pero agrega el elemento al inicio del array");
document.write('<br>');
document.write('<br>');
let numerosUn = [3,4,5];
document.write(numerosUn + '<br>');
resultadoUn = numerosUn.unshift(1,2,3);
document.write('<br>');
document.write('<b>' + resultadoUn + '</b>');
document.write('<br>');
document.write("Nuevo array: " + numerosUn + '<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "SORT" + '</b>');
document.write('<br>');
document.write("Ordena los elementos del array de menor a mayor, se basa en el orden lexicografico, sea letras o sean numeros");
document.write('<br>');
document.write('<br>');
document.write('<br>');

let numerosSort = [1,5,4,3,2,0];
document.write("El array por defecto es: " + '<b>' + numerosSort + '</b>' + '<br>');
resultadoSort = numerosSort.sort();
document.write('<br>');
document.write('<br>');
document.write("El nuevo array es: " + '<b>' + resultadoSort + '</b>');


document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "SPLICE" + '</b>');
document.write('<br>');
document.write("Elimina o reemplaza elementos en el array, por lo que cambia su contenido");
// tiene como primer parametro la posicion y el segundo es la cantidad de elemtnos que se eliminan hacia la derecha y el tercer parametro es para lo que quiero agregar
document.write('<br>');
document.write('<br>');
let lista = ["abecedario", "manzana", "pedro", "Mili"];
document.write("El array por defecto es: " + '<b>' + lista + '</b>');
document.write('<br>');
document.write('<br>');
resultadoLista = lista.splice(0,2);
document.write('<br>');
document.write('<b>' + resultadoLista + '</b>');
document.write('<br>');
document.write('<br>');
document.write("El nuevo array es: " + '<b>' + lista + '</b>');

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

document.write('Ahora quiero agregar elementos, reemplazando a los que eliminé, es decir que si no elimino nada, se agrega desde la posicion indicada');
document.write('<br>');
document.write('<br>');
resultadoListaAgre = lista.splice(1,0,"Arbol");
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + resultadoListaAgre + '</b>');
document.write('<br>');
document.write('<br>');
document.write("El nuevo array es: " + '<b>' + lista + '</b>');

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "JOIN" + '</b>');
document.write('<br>');
document.write('<br>');
document.write('join modifica al array con el parametroq que elijamos, si es un string, en cada separacion, en cada coma, va a intercambiar la coma por lo que ponga.');
document.write('<br>');
document.write('<br>');
document.write('<br>');

let listaJoin = ["manzana", "pera", "kiwi", "naranja", "banana"];
document.write("El array por defecto es: " + '<b>' + listaJoin + '</b>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

resultadoJoin = listaJoin.join(" - ");
document.write('<br>');
document.write("El nuevo array con join( - ): " + '<b>' + resultadoJoin + '</b>');


document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "SLICE" + '</b>');
document.write('<br>');
document.write('<br>');
document.write('slice es una funcion que nos permite obtener una parte de un array, es decir, podemos crear un nuevo array a partir de otro, con los parametros que le de a la funcion, el primero es para saber de donde comienza a copiar y el segundo hasta donde sin copiar el elemento de esa posicion');
document.write('<br>');
document.write('<br>');
document.write('<br>');

let listaSli = ["manzana", "pera", "kiwi", "naranja", "banana"];

document.write("lista sin cambios: " + '<b>' + listaSli + '</b>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

resultadoSli = listaSli.slice(0,3);
document.write("Lista con los cambios: " + '<b>' + resultadoSli + '</b>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('Para tomar a todos los elementos menos el ultimo cuando es una lista grande, se usa el -1');
document.write('<br>');
document.write('<br>');
document.write('<br>');

resultadoSli1 = listaSli.slice(0,-1);
document.write("Lista con los cambios con -1: " + '<b>' + resultadoSli1 + '</b>');
document.write('<br>');
document.write('<br>');
document.write('Para seleccionar a todos los elementos solo basta con dejar vacio el segundo parametro');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>' + "FILTER" + '</b>');
document.write('<br>');
document.write('<br>');
document.write('Es una funcion que permite hacer lo mismo que forEach pero tambien agregando condiciones para filtrar a los elementos');

document.write('<br>');
document.write('<br>');
document.write('<br>');

let listaFil = ["manzana", "pera", "kiwi", "naranja", "banana"];
document.write("lista sin cambios: " + '<b>' + listaFil + '</b>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
