                            // SETTIMEOUT
setTimeout(()=>{
    document.write("prueba" + '<br>'); //Lo que se ejecuta
},2000); //En que momento se ejecuta, por ejemplo a los 2s

document.write('<br>');
document.write('<br>');

// puede ser por una funcion
let saludar = ()=>{
    document.write('hola' + '<br>');
};

setTimeout(()=>{
    document.write('UNO' + '<br>');    
},3000);



                            // SETINTERVAL
// Ejecuta la funcion en relacion al tiempo que le pongamos, en este caso cada 2s

document.write('<br>');
document.write('<br>');

let intervalo = setInterval(saludar,2000);


// Para cortarlo

// clearInterval(id); //id es el id que se le asigna a la funcion que se ejecuta

setTimeout(() => {
    clearInterval(intervalo);
}, 6000);

// Se tiene que ejecutar 3 veces


// HISTORIA 9 DE COFLA