// concatenar

let cadena = "Cadena de prueba"; 

resultado = cadena.concat(", <b> con Concat </b> <br>");

document.write(resultado);

let cadena1 = "cadena";
let cadena2 = "Cadena";
let cadena3 = "Cadena "

// startsWith verifica si una cadena empieza de la misma forma que lo que se ponga en el parentesis

document.write("<br>" + "<b>startsWith & endsWith</b>" + "<br>" + "<br>")

resultado1 = cadena.startsWith(cadena1);
resultado2 = cadena.startsWith(cadena2);
resultado3 = cadena.startsWith(cadena3);

// "Cadena" == "cadena " false
// "Cadena" == "Cadena " true
// "Cadena " == "Cadena " true porque hay un espacio despues de la palabra 

document.write(resultado1 + "<br>"); 
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");

// tambien esta endsWith

let cadenaEnd = "prueba";
let cadenaEnd1 = "a";

resultadoEnd = cadena.endsWith(cadenaEnd);
resultadoEnd2 = cadena.endsWith(cadenaEnd1);

document.write(resultadoEnd + "<br>");
document.write(resultadoEnd2 + "<br>");



// includes() verifica si una cadena puede encontrarse dentro de otra cadena, devuelve un valor booleano
document.write("<br>" + "<b> Includes() </b>" + "<br>");

// cadena = "Cadena de prueba"

document.write("cadena.includes('de')" + "<br>")
resultadoInclu = cadena.includes("de");
// "de" esta dentro de la cadena true

document.write(resultadoInclu + "<br>");

document.write("<br>");
document.write("<b>indexOf & lastIndexOf</b>" + "<br>");

// indexOf() da la posicion del primer elemento de la primera palabra encontrada buscada, y lastIndexOf da la posicion del primer elemento de la ultima palabra buscada, en caso de ser varias. Si no encuentra lo pedido devuelve -1.

let Cadena2 = "prueba prueba prueba"

document.write("Cadena2 = prueba prueba prueba" + "<br>");

resultadoIndex = Cadena2.indexOf("prueba");
resultadoIndex2 = Cadena2.lastIndexOf("prueba");

document.write("<br>" + resultadoIndex);
document.write("<br>" + "la 'p' de prueba esta en el primer lugar, el lugar 0" + "<br>")
document.write("<br>" + resultadoIndex2);
document.write("<br>" + "La 'p' de la ultima palabra esta en la posicion 14")

document.write("<br>" + "<br>");
document.write("<b> padStart & padEnds </b>");

// padStart() y padEnds() son metodos que permiten agregar un caracter o una lista de caracteres, funciona con dos parametros, el primero es la cantidad de espacios, si la cadenaocupa la cantidad que se pone, no agreagrá nada mas y el segundo es el que va a escribir en esos lugares guardados anteriormente, si es start van al principio y si es ends van al final.


resultadoPadS = Cadena2.padStart(30, "110"); 
resultadoPadE = cadena.padEnd(20, "101");
document.write("<br>" + resultadoPadS);
document.write("<br>" + resultadoPadE + "<br>");


document.write("<br>" + "<b> repeat </b>");
// repeat() permite repetir una cadena un numero determinado de veces, el primer parametro es la cantidad.

let cadenaR = "1 "
resultadoRepeat = cadenaR.repeat(3);
document.write("<br>" + resultadoRepeat);


document.write('<br>');
document.write('<br>');
document.write('<b> split </b>');

// split separa a una cadena convirtiendola en un array de objetos y el parametro que lleva es el elemento referente para separar a la cadena

let cadenaSplit = "Hola, como estas?"

document.write('<br>');
document.write('separado por espacio');
resultadoSpEsp = cadenaSplit.split(" ");
document.write('<br>');
document.write(resultadoSpEsp + '<br>');

document.write('<br>');
document.write('separado por coma (,)');
resultadoSpCom = cadenaSplit.split(",");
document.write('<br>');
document.write(resultadoSpCom);

// sirve para separar los elementos dentro de la cadena como un array, el cual es separado por comas, en este caso, se separa de esa forma el que está separado por espacios, cada espacio es la referencia de separador para acomodar una coma. Se puede elegir el elemento dentro del array.
document.write('<br>');
document.write('<br>');
document.write(resultadoSpCom[0]);
document.write('<br>');
document.write(resultadoSpCom[1]);
document.write('<br>');
document.write('<br>');
resultadoSp = cadenaSplit.split("como");
document.write(resultadoSp);
// elimina el como al ser la referncia para separar

document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write("substring");
// usa un parametro que es quien indica desde donde uno quiere que comience creando un nuevo string y otro parametro hasta donde pero sin contarlo, substring(x,y);

let cadenasub = "ABCDEFG";

resultadoSub = cadenasub.substring(0,3); /* Deberia contar ABC porque la D es la posicion 3 */
document.write('<br>');
document.write('<br>');
document.write(resultadoSub);


// toLowerCase y toUpperCase es para mayusculas y minusculas, despues toString espara pasar todo a texto, pero no funciona si usamos multitplicacion o division para mostrar eso, se tiene que usar la concatenacion. Al tener un array y pasarlo por toString al buscar una posicion serian las posiciones de las letras porque el array ahora es un string que esta todo unido.


document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<b>TRIM</b>');
document.write('<br>');
// elimina los espacios en blanco al principio y al final de la cadena

let cadenaTrim = "   Pedro   ";
document.write(cadenaTrim);
// lo muestra sin espacios pero estan ahi contados
document.write('<br>');
document.write(cadenaTrim.length + " lugares");
resultadoTrim = cadenaTrim.trim();
document.write('<br>');
document.write('<br>');
document.write(resultadoTrim);
document.write('<br>');
document.write(resultadoTrim.length + " lugares");
// Tambien esta trim end y start, que hacen lo mismo pero depenede si es al principio o al final