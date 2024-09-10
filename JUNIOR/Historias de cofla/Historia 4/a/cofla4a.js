const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicacion = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const potencia = (num1, num2) => {
    return Math.pow(num1,num2);
}
const raiz_cuadrada = (num1) => {
    return Math.sqrt(num1);
}
const raiz_cubica = (num1) => {
    return Math.cbrt(num1);
}


operacion = prompt(`Que operacion queres hacer? <br>
        1: Suma 
        2: Resta 
        3: Division 
        4: Multiplicacion
        5: Potencia
        6: Raiz cuadrada
        7: Raiz cubica
        `);

if (operacion == 1){
    alert("Elegiste suma");
    let numero1 = "Primer numero";
    let numero2 = "Sumando";
    resultado = alert("El resultado de tu operacion es " + suma(prompt(numero1),prompt(numero2)));
}

if (operacion == 2){
    alert("Elegiste resta");
    let numero1 = "Primer numero";
    let numero2 = "Sumando";
    resultado = alert("El resultado de tu operacion es " + resta(prompt(numero1),prompt(numero2)));
}
if (operacion == 3){
    alert("Elegiste division")
    let numero1 = "Dividendo";
    let numero2 = "Divisor";
    resultado = alert("El resultado de tu operacion es " + division(prompt(numero1),prompt(numero2)));
}
if (operacion == 4){
    alert("Elegiste multiplicacion");
    let numero1 = "Primer factor";
    let numero2 = "Segundo factor";
    resultado = alert("El resultado de tu operacion es " + multiplicacion(prompt(numero1),prompt(numero2)));
}
if (operacion == 5){
    alert("Elegiste potencia");
    let numero1 = "Elegir la base";
    let numero2 = "Elegir la potencia";
    resultado = alert("El resultado de tu operacion es " + potencia(prompt(numero1),prompt(numero2)));
}
if (operacion == 6){
    alert("Elegiste raiz cuadrada");
    let numero1 = "Elegir numero para sacar raiz cuadrada";
    resultado = alert("El resultado de tu operacion es " + raiz_cuadrada(prompt(numero1)));
}
if (operacion == 7){
    alert("Elegiste raiz cubica");
    let numero1 = "Elegir numero para sacar raiz cubica";
    resultado = alert("El resultado de tu operacion es " +raiz_cubica(prompt(numero1)));
}