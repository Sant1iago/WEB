function suma(num1, num2, num3){
    let res = num1 + num2+ num3;
    return res;
}

document.write(suma(2,3,1));
// O
document.write("<br>")
let resultado = suma(2,3,1);
document.write(resultado);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

function saludar(nombre){
    let frase = `Hola ${nombre}, ¿Como estás?`;
    document.write(frase);
}

document.write(saludar("Mostro"));


// FUNCIONES FLECHA

const saludar = (nombre) => {
    document.write("Hola, como estas? " + nombre);
}

saludar("Pedro");