// creo la clase Animal y con el constructor le doy atributos de la clase
class Animal {
    constructor(nombre, edad, especie, color) {
        // con this se crean propiedades y les doy un nombre despues del punto
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.color = color;
        this.info = `Soy ${nombre}, un ${especie} de ${edad} años y  de color ${color}` + "<br>";
    }
    // creacion de metodo, no pueden ser funciones flecha, tampoco constantes
    verInfo(){
        document.write(this.info + "<br>");
    }

    // metodo de prueba para ver polimorfismo, que es que un mismo objeto se comporte de la misma forma con diferentes metodos.
    ladrar(){
        if(this.especie == "perro" || this.especie == "Perro"){
            document.write("Guau guau" + "<br>");
        }else{
            document.write("No puede ladrar porque es un " + this.especie + "<br>");
        }
    }

    
}



// trabajando con herencia
class Perro extends Animal {
    constructor(nombre, edad, especie, color, raza){
        super(nombre, edad, especie, color);
        this.raza = raza;
    }

    // getters y setter es para obtener informacion y modificar la informacion, son metodos pero que al modificarlos, se toman como una propiedad poniendo el signo igual
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }

    // Son utilizados para acceder a propiedades privadas o para acceder a datos encapsulados en el caso de javascript
}
// El error es por declarar una variable con el mismo nombre que la clase declarada, clase perro con variable perro, cambiada la clase por Perro, clases con mayuscula

// cuando se trabaja con objetos se usa const
const perro  = new Perro("bobi", 5, "perro", "gris", "pitbull");
const pajaro = new Animal("tobi", 5, "gato", "rojo");
const gato = new Animal("samuel", 3, "pajaro", "blanco");


/* document.write(perro.info); */
perro.verInfo(); 
gato.verInfo(); 
pajaro.verInfo(); 

perro.ladrar();
pajaro.ladrar();
gato.ladrar();


// set
perro.setRaza = "<br>" + "Octopus";

document.write(perro.raza); /* Puede ser asi */
document.write(perro.getRaza); /* O asi */