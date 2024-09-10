/* Crear un array con variables asociadas */

let pc = {
    nombre: "La compu",
    marca: "HP",
    modelo: 'Envy',
    precio: 1500
};

let nombre = pc["nombre"];
let marca = pc["marca"];
let modelo = pc["modelo"];
let precio = pc["precio"];

let frase = `El nombre de mi pc es <b> ${nombre}</b> <br> 
            de la marca <b> ${marca} </b><br>
            es el modelo <b> ${modelo}</b> <br>
            su coste es de <b> ${precio}</b>.`;

document.write(frase);


