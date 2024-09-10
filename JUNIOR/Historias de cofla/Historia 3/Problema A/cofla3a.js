/* Mostrar las caracteristicas de cada celular
cada uno tiene que tener: color, peso, resolucion de pantalla, camara y memoria ram
deben poder prender, reinicar, tomar fotos y grabar */

class celulares {
    constructor(color, peso, rdp, rdc, rdv, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rdp;
        this.resolucionCamara = rdc;
        this.resolucionVideo = rdv;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    // metodos, lo que debe poder hacer, prender, reiniciar, sacar fotos, grabar
    botonDeEncendido(){
        if(this.encendido == false){
            alert("El celular esta apagado, voy a prenderlo");
            this.encendido = true;
            alert("El celular esta prendido");
        }else if (this.encendido == true){
            alert("El celular esta prendido, voy a apagarlo");
            this.encendido = false;
            alert("El celular esta apagado, nuevamente");
        }
    }


    reiniciar(){
        if(this.encendido == false){
            alert("El celular esta apagado, voy a prenderlo");
            this.encendido = true;
            alert("El celular esta prendido, voy a reiniciarlo");
        } else {
            alert("El celular esta prendido, voy a reiniciar");
        }
    }

    sacarFotos(){
        alert(`Foto tomada con una resolucion de ${this.resolucionCamara}`);
    }

    grabar(){
        alert(`Grabando video`);
        alert(`Video grabado con una resolucion de ${this.resolucionVideo}`);
    }

    mostrarInfo(){
        return`
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
        Resolucion de camara: <b>${this.resolucionCamara}</b><br>
        Resolucion de video: <b>${this.resolucionVideo}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>
        `;
    }
}

// Son 3 celulares

/* (color, peso, resolucion, camara, ram) */

celular1 = new celulares ("negro", "150 gr", "6.0 in", "50px", "1920x1080", "8 gb");
celular2 = new celulares ("blanco", "130 gr", "5.0 in", "30px", "1360x720", "8 gb");
celular3 = new celulares ("azul", "220 gr", "6.5 in", "70px", "2040x1920", "16 gb");

/* celular1.botonDeEncendido();
celular1.sacarFotos();
celular1.grabar();
celular1.reiniciar();
celular1.botonDeEncendido(); */

document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>
    `
);