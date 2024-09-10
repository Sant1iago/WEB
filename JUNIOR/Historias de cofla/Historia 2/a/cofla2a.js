/* Dejar pasar a los mayores de edad y si son mas de las 2 am la primer persona no paga */

// variable de autorizacion para pasar
let free = false;

// funcion de validacion de clientes con respecto al tiempo

const validacionCliente = (time) => {
    // Variable de edad
    let edad = prompt("Cual es tu edad?");
    if(edad > 18){
        // Si la edad es mayor a 18, si entra entre 2 am y 6 am, si free = false
        if(time >= 2 && time < 6 && free== false ){
            alert("Sos la primer persona a las 2am podes pasar gratis");
            free = true;
        }else{
            alert(`${time}hs, pasas si pagas`);
        }
    }else{
        alert(`No podes pasar, sos menor de edad, la hora es ${time}hs`);
    }
}

validacionCliente(22);
validacionCliente(24);
validacionCliente(1);
validacionCliente(2);
validacionCliente(3);
validacionCliente(5);