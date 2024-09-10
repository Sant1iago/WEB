// implementar lo mismo pero en celulares de alta gama, lo mismo pero camara extra, dos celulares

class Celulares {
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

class CelularAltaGama extends Celulares{
    constructor(color, peso, rdp, rdc, rdv, ram, rdce){
        super(color, peso, rdp, rdc, rdv, ram);
        this.resolucionCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Grabando video lento");
    }
    reconocimientoF(){
        alert("Reconociendo la cara");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion de camara trasera: ${this.resolucionCamaraExtra} + <br>`;
    }
}

// Son 3 celulares

/* (color, peso, resolucion, camara, ram) */

celular1 = new Celulares ("negro", "150 gr", "6.0 in", "50px", "1920x1080", "4 gb");
celular2 = new Celulares ("blanco", "130 gr", "5.0 in", "30px", "1360x720", "8 gb");
celular3 = new Celulares ("azul", "220 gr", "6.5 in", "70px", "2040x1920", "16 gb"); 

/* celular1.botonDeEncendido();
celular1.sacarFotos();
celular1.grabar();
celular1.reiniciar();
celular1.botonDeEncendido(); 
 */
document.write(`
    ${celular1.mostrarInfo()} <br>
    ${celular2.mostrarInfo()} <br>
    ${celular3.mostrarInfo()} <br>
    `
); 

document.write("Celulares de alta gama" + "<br>" + "<br>");

celularA1 = new CelularAltaGama ("Rojo", "200gr", "7'", "90px", "2040x1920", "16gb", "40px");
celularA2 = new CelularAltaGama ("Rosa", "260gr", "7.7'", "120px", "2040x1920", "32gb", "64px");

document.write(`
    ${celularA1.infoAltaGama()} <br>
    ${celularA2.infoAltaGama()} <br>
    `
);