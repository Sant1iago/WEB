                        // METODOS DE SELECCION DE ELEMENTOS
                                // DOCUMENT  
// metodos de seleccion de elementos
// getElementById, selecciona un elemento por ID, hago algo en html antes de empezar con javascript

/* parrafo = document.getElementById("parrafo");  *///Esta seleccionado el parrafo de html por el ID

// getElementsByTagName, selecciona al igual que el anterior pero esta vez usando la etiqueta, es decir, p si es parrafo, div si es un contenedor, body si es todo, etc. Al tener varios elementos de la misma etiqueta se los puede seleccionar como si fuera una lista array.

// EJEMPLO
// parrafo = document.getElementsByTagName("p");
// lo que el navegador muestra es:
// [object HTML.ParagraohElement]


// Puedo jugar con la seleccion:
// document.write(parrafo[2]);
// document.write(parrafo[1]);
// document.write(parrafo[0]);


                                // QUERYSELECTOR
// querySelector();, Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// Es para seleccionar los elementos de HTML con el simbolo del selector mas el nombre 

// EJEMPLO
// parrafo = document.querySelector("#p"); es un ID, uso #
// parrafo = document.querySelector(".p"); es una CLASE, uso .

// Otro selector es el querySelectorAll();, selecciona a todos los elementos los cuales coincida con la busqueda.

                        // METODOS DE ATRIBUTOS DE UN ELEMENTO

// Al querer cambiar el atributo de un alemento, se usa setAttribute();
// EJEMPLO

const rangoEtario = document.querySelector(".rangoEtario");
document.write('<br>' + rangoEtario);

// Para cambiarlo, con el parametro de lo que quiero modificar, el "type" del input en HTML, primer valor lo que quiero modificar, segundo valor, lo que va a reemplazarlo. No solo modifica, sino que los crea y los establece.

rangoEtario.setAttribute("type", "text");

// Para obtenerlo, parametro lo que quiero obtener como respuesta

document.write('<br>' + "es de tipo: " + rangoEtario.getAttribute("type"));

// Para sacar el valor del atributo

rangoEtario.removeAttribute("type");

document.write('<br>' + "ahora es de tipo: " + rangoEtario.getAttribute("type"));


                                // ATRIBUTOS GLOBALES

/* class - lista de clases del elemento separadas por espacios.
   contenteditable - indica si el elemento puede ser modificado por el usuario, retorna un booleano.
   dir - indica la direccionalidad del texto.
   hidden - indica la relevancia de un elemento.
   id - define un identificador unico.
   style - contiene declaraciones de estilo CSS para ser aplicados al elemento.
   tabinex - indica si el elemento puede obtener un focus de input.
   title - contiene un texto con informacion relacionada al elemento al que pertenece. */ 

//EJEMPLOS

// contenteditable
const titulo = document.querySelector(".titulo");

/* titulo.setAttribute("contentEditable","true"); //puedo editar el titulo */

titulo.setAttribute("dir","rtl"); //puedo editar la direccion con "ltr" (left to right) o "rtl" (right to left)

/* titulo.setAttribute("hidden",""); */ //esconde el elemento, para hacer que vuelva a aparecer hay que usar removeAttribute o directamente borrarlo, porque funciona con cualquier parametro

const enlace = document.querySelector(".enlace");
enlace.setAttribute("tabindex","0"); //Ahora deja hacerle focus al elemento con la tecla TAB, depende del orden en el que ponga los numeros, va a ser el orden en el que el tab se mueva con respecto a los items o elementos dentro de la pagina

// title nos ayuda a ponerle un mensajito al lado del cursor para saber de que se trata donde esta haciendo "hover" el mouse, una pequeña descripcion en dos palabras

titulo.setAttribute("title", "titulo normal"); //asi acercando el cursor al titulo principal va a decir "titulo normal"


                                // ATRIBUTOS DE LOS INPUTS

// Lista de atributos a ver
/* classname
   value, se usa bastante
   type
   accept
   form
   minlength
   placeholder
   required */


                        // CLASSNAME
// className, es un atributo que accede directamente al elemento desde js, lo que facilita el no tener que usar metodos largos

const inputClass = document.querySelector(".input-className");

// magia
document.write('<br>');
document.write('<br>' + "<b>parte de className:</b> " + inputClass.className);


                        // VALUE
// Haciendo lo mismo pero en vez de "className" pongo "value", me va a mostrar el valor que tiene el atributo value, en este caso nada pero si le pongo el atributo y un valor o seteo el atributo con un valor, lo va a mostrar.

document.write('<br>');
const inputValue = document.querySelector(".input-value");

// seteo el valor antes

inputValue.setAttribute("value", "133");

document.write('<br>' + '<b>Parte de value:</b> ' + inputValue.value);
// No lo pone al lado pero si está el valor en la parte del input, dentro del mismo


                        // TYPE
// Es para cambiar el tipo del atributo de manera directa 
const input_type = document.querySelector(".input-type")
document.write( input_type.type = "range");
input_type.type = "range"; //No hace falta mostrar en pantalla el tipo que es el input, pse puede usar de manera funcion


                        // COLOR
// Da un espacio para cambiar el color
const inputCo = document.querySelector(".input-color");
inputCo.type = "color";


                        // ACCEPT
// Se usa para los inputs type file, es para poder subir un archivo y el accept es un validador de loq ue quiero que suban ahi

const inputAcce = document.querySelector(".input-accept");
inputAcce.type = "file";
inputAcce.accept = "image/*"; // Solo acepta imagenes, con " * ", para seleccionar cualquier formato de imagen


                        // FORM
// usando un formulario en html, cuando el boton de submit esta dentro del fomra, no hay problema pero si esta fuera del formaulario, el mismo form tiene que tener un ID que lo uso en el boton de submit con un atributo formulario con el valor el id del form


                        // MINLENGTH
// Es para poner un minumo de caracteres, por ejemplo en el formulario
const inputMin = document.querySelector(".input-minL");

// le agrego el atributo

inputMin.minLength = 3;


                    // PLACEHOLDER
// Sigue haciendo lo mismo solo que puedo setearlo desde aca
// elemento.placeholder = lo que quiero que se vea


                        // REQUIRED
// Es para que el input sea obligatorio, si no se pone nada, no se puede, es un mensaje del navegador diciendo que es obligatrio el campo

const inputRe = document.querySelector(".input-required");
inputRe.required = true; // Si no se pone nada, no se puede enviar el formulario


                        // STYLE
// Color
const subti = document.querySelector(".subtitle");
subti.style.color = "red";

// Las propiedades de CSS con guion en medio se remueve y se intercambia por camel case

const subti1 = document.querySelector(".subtitle1");
subti1.style.padding = "30px";
subti1.style.backgroundColor = "#a55";




                        // CLASES, CLASSLIST Y METODOS DE CLASSLIST

/* Todos los metodos se usan con "classList". */

// Tipo de clases
/* 
add() - agrega una clase al elemento, en html se muestra como se separa por un espacio
remove() - remueve una clase
item() - devuelve la clase del indice especificado, es decir que las clases estan dentro de un array y con los indices de posiciones accede a las posiciones y devuelve dicho elemento
contains() - verifica si ese elemento posee o no la clase especificada
replace() - reemplaza una clase por otra
toggle() - si no tiene la clase especificada, la agrega, si ya la tinene la elimina
 */

// ADD
const classAdd = document.querySelector(".classlist1");
classAdd.classList.add("add"); // Agrega la clase a classlist1


// REMOVE
const classRemove = document.querySelector(".classlist2");
classRemove.classList.add("remove")
document.write('<br>' + '<br>' + "<b>las clases de classlist2 antes del remove:</b> " + classRemove.className); 
classRemove.classList.remove("remove"); // Elimina la clase de classlist2
document.write('<br>' + '<br>' + "<b>las clases de classlist2 despues del remove:</b> " + classRemove.className);


// ITEM
const classItem = document.querySelector(".classlist3");

classItem.classList.add("elemento1");
classItem.classList.add("elemento2");
classItem.classList.add("elemento3");

document.write('<br>' + '<br>' + "<b>La clase en la posicion 0 en classlist3 es:</b> " + classItem.classList.item(0));
document.write('<br>' + '<br>' + "<b>La clase en la posicion 1 en classlist3 es:</b> " + classItem.classList.item(1));
document.write('<br>' + '<br>' + "<b>La clase en la posicion 2 en classlist3 es:</b> " + classItem.classList.item(2) + '<br>' + '<br>');



// CONTAINS
const classContains = document.querySelector(".classlist4");

classContains.classList.add("elemento1");
classContains.classList.add("elemento2");
classContains.classList.add("elemento3");

document.write("tiene la clase 'elemento2'? " + classContains.classList.contains("elemento2") + '<br>' + '<br>'); //Devuelve true o false
document.write("tiene la clase 'titulo'? " + classContains.classList.contains("titulo")); //Devuelve true o false



// TOGGLE
// Si la clase existe la elimina y devuelve false, pero si la clase no existe, la agrega y devuelve true.
const classToggle = document.querySelector(".classlist5");
document.write('<br>' + classToggle.classList.toggle("toggle")); //agregada (true)
document.write('<br>' + classToggle.classList.toggle("toggle")); //eliminada (false)

/* Para que no la elimine si es que está, como segundo parametro va "true" */
document.write('<br>' + classToggle.classList.toggle("toggle", true)); //agregada 
document.write('<br>' + classToggle.classList.toggle("toggle", true)); //no eliminada

/* Al contrario, si pongo "false" la elimina y no la agrega */


// REPLACE
const classReplace = document.querySelector(".classlist6");
classReplace.classList.add("hoal");
document.write('<br>' + '<br>' + "<b>las clases de classlist6 antes de replace son:</b> " + classReplace.className);
classReplace.classList.replace("hoal", "hola");
document.write('<br>' + '<br>' + "<b>las clases de classlist6 despues de replace son:</b> " + classReplace.className);

document.write('<br>');
document.write('<br>');
document.write('<br>');

                        // OBTENCION Y MODIFICACION DE ELEMENTOS

/* 
textcontent - devuelve el texto de cualquier nodo
innertext - devuelve el texto VISIBLE de un node element (elemento de nodo) --NO SE USA MAS
outertext - devuelve el texto de las etiquetas HTML, incluidas las etiquetas --NO SE USA MAS

innerHTML - devuelve el contenido HTML de un elemento
outerHTML - devuelve el codigo HTML completo del elemento
*/

// TEXTCONTENT
const textC = document.querySelector(".subti1");
document.write("el texto devuelto del archivo HTML, sin modificaciones ni etiquetas: " + '<br>' + textC.textContent);

// INNERHTML
// no muestra el contenido escondido con document.write, pero si lo hace con alert
const innerH = document.querySelector(".subti2");
// DESCOMENTAR PARA VER
/* alert(innerH.innerHTML);
document.write('<br>');
document.write('<br>');
document.write(innerH.innerHTML);
 */


// OUTERHTML
// Es como inner pero este devuelve informacion adicional en el alert como las etiquetas usadas, sea p de parrafo, sus clases, etc. Es como que copia y pega la linea de codigo que estamos usando 



                        // CREACION DE ELEMENTOS
/* CreateElement()
   CreateTextNode()
   CreateDocumentFragment()
 */

const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI") //js es case sensitive, entonces se tiene que poner en mayusculas


// Para hacer que el elemento li tenga algo adentro
const textoDelItem = document.createTextNode("Prueba de text node");


// Para meter el nodo de texto dentro dl nodo de lista, se usa appendChild()
item.appendChild(textoDelItem);

// Ahora la lista puede ser hijo directo de un div, entonces es lo mismo

contenedor.appendChild(item);
/* console.log(contenedor); */

// Para no hacer uso excesivo de recursos, se usa createDocumentFragment();, cuando se crea solo queda agregarlo

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20 ; i++){
   const item = document.createElement("LI");
   item.innerHTML = "Prueba de documentFragment";
   fragmento.appendChild(item);
}
// Para meterlo en el contenedor, se usa appendChild()
contenedor.appendChild(fragmento);



                                    // OBTENCION Y MODIFICACION DE CHILDS
/* FirstChild  -  Toma al primer hijo, los espacios tambien cuentan como hijos
   LastChild  - Lo mismo pero al ultimo
   FirstElementChild  - Toma al primer elemento hijo 
   lastElementChild  - Lo mismo pero al ultimo.
   childNodes  -  Devuelve todos los nodos hijos
*/




// FIRST & LAST CHILDS

const contenedor1 = document.querySelector(".contenedor1");

const primerHijo = contenedor1.firstChild;
const ultimoHijo = contenedor1.lastChild;

console.log(primerHijo); //No hay espacio de separacion entre el div y el h2
console.log(ultimoHijo);




// FIRST & LAST ELEMENT CHILD

// La diferencia con first & last element

const primerHijoE = contenedor1.firstElementChild;
const ultimoHijoE = contenedor1.lastElementChild;

console.log(primerHijoE);
console.log(ultimoHijoE); //Aun con espacios, no toma el espacio como al hijo sino al ELEMENTO



// CHILDNODES
// Nodelist se puede recorrer con un forEach 
const hijosN = contenedor1.childNodes;
console.log(hijosN);



// CHILDREN
// Devuelve todos los elementos hijos, no los espacios en blanco, es decir que solo las etiquetas
// Se puede recorrer con un for in o mejor un for of
const hijos = contenedor1.children;
console.log(hijos);


                              // METODOS DE CHILDS(HIJOS)
/* REPLACECHILD
   REMOVECHILD
   HASCHILDNODES
 */

// replaceChild()

const contenedor2 = document.querySelector(".contenedor2");

const parrafo = document.createElement("P");
const h4_nuevo = document.createElement("H4");
h4_nuevo.innerHTML = "TituloNuevo";

h4_antiguo = document.querySelector(".title4");

contenedor2.replaceChild(h4_nuevo,h4_antiguo);



// removeChild();

const remover = document.querySelector(".sacar");

contenedor2.removeChild(remover);



// hasChildNodes();

// Devuelve true si hay al menos un hijo, false si no hay hijos
console.log(contenedor2.hasChildNodes()); // true porque tiene hijos

// Al hacerlo con el p y los h's va a dar true si tiene algo de texto y false si estan vacios



                                 // Propiedades de parents (PADRES)
/* PARENTELEMENT - Selecciona al padre HTML del elemento
   PARENTNODE - Elige al parentNode (padre nodo), selecciona al padre NODO del elemento
 */


// parentElement();
const contenedor3 = document.querySelector(".contenedor3");
const h2_padres = document.querySelector(".ti2");
console.log(h2_padres.parentElement); // devuelve el padre del h2, que es el contenedor3
console.log(contenedor3.parentElement);







                           // Propiedades de siblings (HERMANOS)
/* NEXTSIBLING
   PREVIOUSSIBLING
   NEXTELEMENTSIBLING
   PREVIOUSELEMENTSIBLING
*/

// nextSibling();

const contenedor4 = document.querySelector(".contenedor4");
const p_hermano = document.querySelector(".texth");
const h2_hermano = document.querySelector(".titleH");
const h4_hermano = document.querySelector(".titleH4");
console.log(h2_hermano.nextSibling); // devuelve el siguiente hermano del h2, que es un espacio, es decir, texto
console.log(h2_hermano.nextElementSibling); // devuelve el siguiente hermano elemento del h2, que es el h4
console.log(h4_hermano.previousElementSibling); //Devuelve el hermano elemento de h4 que es el h2




                              // NODOS (Propiedad extra)
/* CLOSEST */
// closest();
const contenedor5 = document.querySelector(".contenedor5");
const h2_nodo = document.querySelector(".titleH2");
console.log(h2_nodo.closest(".contenedor5")); 

// Selecciona el elemento ascendente mas cercano, seleccionando el h2, el padre nodo mas cercano es el contenedor

const div1 = document.querySelector(".div-1");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
console.log(div3.closest(".div-1")); // devuelve el div2, ya que es el nodo padre ascendente mas cercano