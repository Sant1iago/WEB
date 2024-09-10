let cantidad = prompt("Cuantos alumnos son son en total?");
let alumnosTotales = [];

// for para ver cantidad de alumnos
for (let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

// for para cantidad de asistencias
const asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }else if (presencia == "a" || presencia == "A"){
        alumnosTotales[p][1]--;
    }
}

// for para cantidad de veces que el bucle se realiza
for(let i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        // es un for in entonces da el indice, entonces el nombre que va es "alumnosTotales" con la variable alumno que da el nombre y con el 0 accedo solo al nombre. La variable alumno nos da la posicion.
        asistencia(alumnosTotales[alumno][0], alumno);
    }
}

for(alumno in alumnosTotales){
    // pongo el nombre 
    let resultado = `${alumnosTotales[alumno][0]}: <br>
            Asistencias: ${alumnosTotales[alumno][1]} <br>
            Inasistencias: ${30 - alumnosTotales[alumno][1]} <br>
            `;
    if(30 - alumnosTotales[alumno][1] > (1.8 * 10)){
        resultado+= `El alumno ${alumnosTotales[alumno][0]} queda reprobado por inasistencias <br>`; 
    }else{
        resultado+=`El alumno ${alumnosTotales[alumno][0]} queda aprobado <br>`;
    }
    document.write(resultado);
}


