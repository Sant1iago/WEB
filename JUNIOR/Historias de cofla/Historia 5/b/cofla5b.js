// cofla debe trabajar 8 horas por dia y durante dos semanas en las que tiene que estudiar 24hs, hacer trabajos 24hs, 56hs para trabajar y 8 horas para hacer las cosas de la casa.
// Debe organizar las acividades diariamente
// utilizar la consola para organizar todo
// el tiempo por tarea no debe superar las 4 horas

// por dia tendria que limpiar 35 minutos   8 * 14(2 semanas) * 60(minutos)
// hacer trabajos por 100 minutos
// descanso de 10 minutos
// estudiar por 100 minutos
// trabajar 240 minutos

let trabajoMin = "240 minutos";
let estudiarMin = "100 minutos";
let descanso = "10 minutos";
let limpiar = "35 minutos";
let hacerTrabajosMin = "100 minutos";
let trabajoHor = "4 horas";
let estudiarHor = "1 hora y 40 minutos";
let hacerTrabajosHor = "1 hora y 40 minutos";

    for (var i = 1; i < 15; i++){
        if (i == 1){
            console.group("Semana " + i);
        }
        console.group("dia " + i);
        console.log("Trabajar por " + trabajoMin + " es decir " + trabajoHor);
        console.log("Tenes un descanso de " + descanso);
        console.log("Toca estudiar por " + estudiarMin + " es decir " + estudiarHor);
        console.log("Tiempo para trabajos practicos es de " + hacerTrabajosMin + " es decir " + hacerTrabajosHor);
        console.log("Limpiar por " + limpiar);
        console.groupEnd();
        if (i == 7){
            console.groupEnd();
            console.group("Semana 2");
        }
} 
