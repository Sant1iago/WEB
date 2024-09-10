/* El while pregunta y despues acciona
el do while, acciona una vez y despues pregunta pra ver si sigue accionando
el bucle for esta declarado por cuantas iteraciones va a hacer 
el break corta el bucle, el continue saltea el elemento de esa posicion
FOR IN devuelve el indice de un array dentro de un bucle
FOR OF devuelve el elemento del indice */

let i = 0;

document.write("<b> While: </b>" + "<br>");

while(i < 3){
    document.write("Hola");
    document.write("<br>");
    i++;
}

document.write("<br>");
document.write("<br>");

document.write("<b> do while </b>" + "<br>");

let s = 0;

do {
    document.write("Hola");
    document.write("<br>");
    s++;
}
while(s<1);


document.write("<br>");
document.write("<br>");


document.write("<b> for </b>" + ("<br>"));

for(let y = 0; y < 2; y++){
    document.write("Hi");
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");


document.write("<b> for con resta </b>" + ("<br>"));

for(let p = 4; p > 2; p--){
    document.write("gutentag");
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");


document.write("<b> for (break) </b>" + ("<br>"));

for(let x = 0; x < 2; x++){
    document.write("aloH");
    document.write("<br>");
    if(x == 1){
        break;
    }
}

document.write("<br>");
document.write("<br>");


document.write("<b> for (continue) </b>" + ("<br>"));

for(let j = 0; j < 5; j++){
    document.write("hello");
    document.write("<br>");
    if(j == 1){
        continue;
    }
}


document.write("<br>");
document.write("<br>");

document.write("<b> for in </b>" + "<br>");

let animales = ["perro", "gato", "toro"];

for (animal in animales){
    document.write(animal);
    document.write("<br>");
}

document.write("<br>");

document.write("Segunda forma para mostrar los elementos del array" + "<br>")

document.write("<br>");

for (animal in animales){
    document.write(animales[animal]);
    document.write("<br>");
}

document.write("<br>");
document.write("<br>");


document.write("<b> for of </b>" + "<br>");

for (animal of animales){
    document.write(animal);
    document.write("<br>");
}




document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<b> EJEMPLO </b>" + "<br>");

array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1];

for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

