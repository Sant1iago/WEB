const contenedor = document.querySelector(".flex-container")

function crearLlave(nombre, modelo,precio){
    img = "<img class= llave-img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return[img,nombre,modelo,precio];
}


let changeHidden = (number)=>{
    document.querySelector(".key-data").value = number
}

let documentFragment = document.createDocumentFragment();


for (var i = 1; i<=20; i++){
    // doy un numero random redondeado al modelo
    let modeloRandom = Math.round(Math.random()*10000);
    // doy un precio random redondeado, multiplicado por 10 para hacerlo entre 0 y 10, sumando 30 para hacerlo entre 30 y 40
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}` , `modelo ${modeloRandom}`, `${precioRandom}`);
    // Creo un elemento div
    let div = document.createElement("DIV");
    // Agrego el evento de click
    div.addEventListener("click", () =>{changeHidden(modeloRandom)})
    // Hay que decirle al elemento div que se ha seleccionado una llave
    div.tabIndex = i;
    div.classList.add(`item-${i}` , `flex-item`);
    // agrego texto dentro del div creado
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);