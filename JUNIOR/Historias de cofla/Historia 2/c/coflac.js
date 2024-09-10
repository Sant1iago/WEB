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

operacion = prompt(`Que operacion queres hacer? <br>
        1: Suma 
        2: Resta 
        3: Division 
        4: Multiplicacion
        `);

if (operacion == 1){
    let numero1 = "Primer numero";
    let numero2 = "Segundo numero";
    resultado = alert("El resultado de tu operacion es " + suma(prompt(numero1),prompt(numero2)));
}

if (operacion == 2){
    let numero1 = "Primer numero";
    let numero2 = "Segundo numero";
    resultado = alert("El resultado de tu operacion es " + resta(prompt(numero1),prompt(numero2)));
}
if (operacion == 3){
    let numero1 = "Primer numero";
    let numero2 = "Segundo numero";
    resultado = alert("El resultado de tu operacion es " + division(prompt(numero1),prompt(numero2)));
}
if (operacion == 4){
    let numero1 = "Primer numero";
    let numero2 = "Segundo numero";
    resultado = alert("El resultado de tu operacion es " + multiplicacion(prompt(numero1),prompt(numero2)));
}