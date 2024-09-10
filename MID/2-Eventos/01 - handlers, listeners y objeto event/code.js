// HANDLERS - No se utilizan de esta manera
/* const button = document.querySelector(".button");

button.onclick = ()=>{
    alert("Button clicked");
} */


// EVENT LISTENERS - Si se usan
const button = document.querySelector(".button");

// Deven ser funciones normales, no flechas

function saludar(){
    alert("Button clicked");
}


//e de event, para que muestre los eventos y que tipo de evento es
button.addEventListener("click",(e)=>{
console.log(e);
});


// muestra el lugar donde se registro el evento
button.addEventListener("click",(e)=>{
console.log(e.target);
}); 



// EVENT FLOW

// BUBBLING es que primero ejecuta a los mas especificos que son los hijos y despues a los menos especificos que son los contenedores en este caso teniendo un div y dentro a un boton


// Para cambiar el tipo de evento, que sea un evento CAPTURING, se hace lo siguiente:
/* button.addEventListener("click",(e)=>{
    console.log(e.target);
    },true);  */

// Se agrega TRUE al final, para hacer que el que tiene true sea el primero en los eventos y despues seguir con la especificidad de hijos y despues padres



// STOP PROPAGATION

// Es para que al hacer click en un boton, solo cuente el boton y los eventos no se propaguen hacia los demas elementos

/* 
        button.addEventListener("click",(e)=>{
        alert("diste click");
        e.stopPropagation();
        });
*/

/* Es para cuando hay mas de un evento y solo quiero que uno de ellos funcione y se detenga */

