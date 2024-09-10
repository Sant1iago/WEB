/* Crear un sistema para decidir que app descargar
Con la cantidad de descargas, puntuacion y peso
Se deben poder instalar, abrir, cerrar y desinstalar */

class App {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        let i = prompt("Quieres descargar la apliacion?");
        if(i == "si" || i == "Si"){
            this.instalada = true;
            alert("La aplicacion se ha instalado");
        }
        else if (i == "No" || i == "no"){
            alert("La aplicacion no se ha instalado");
        }else{
            alert("No se hará nada");
        }

    }
    desinstalar(){
        let i = prompt("Estas por desinstalar la aplicacion, continuar?");
        if((i == "si" || i == "Si") && this.instalada == true){
            this.instalada = false;
            alert("La aplicacion se ha desinstalado");
        }
        else if ((i == "si" || i == "Si") && this.instalada == false){
            alert("La aplicacion no se ha instalado, no puede ser desinstalada");
        }
        else if ((i == "No" || i == "no") && this.instalada == true){
            alert("La aplicacion no se ha desinstalado");
        }
        else if((i == "No" || i == "no") && this.instalada == false ){
            alert("La aplicacion no se ha sido instalada, no puede desinstalarse");
        }
        else{
            alert("No se hará nada");
        }
    }

    abrir(){
        if(this.instalada == true && this.iniciada == false){
        let i = prompt("Quieres abrir la aplicacion?")
            if(i == "si" || i == "Si"){
            alert("La aplicacion se ha abierto");
            this.iniciada = true;
            }
            else if (i == "no" || i == "No"){
                alert("La aplicacion no se ha abierto");
            }
        } else if(this.instalada == false && this.iniciada == false){
            alert("No tienes la aplicacion");
        }
    }

    cerrar(){
        if(this.instalada == true && this.iniciada == true){
            let i = prompt("Quieres cerar la aplicacion?")
            if(i == "si" || i == "Si"){
                alert("La aplicacion se ha cerrado");
                            this.iniciada = false;
            }
            else if (i == "No" || i == "no"){
                alert("Todavia estas en la aplicaion");
            }
        }
    }

    infoApp(){
        return`
        Cantidad de descargas: ${this.descargas} <br>
        Puntuacion de la app: ${this.puntuacion} <br>
        Peso de la aplicacion: ${this.peso} <br>
        `;
    }
}

app1 = new App ("20 Descargas", "3.5 estrellas", "957 MB" );


document.write(app1.infoApp());

// comentando lo de abajo, se muestra la documentacion en pantalla

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();
