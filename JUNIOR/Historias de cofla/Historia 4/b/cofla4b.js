obtenerInfo = (materia) => {
    materias = {
        matematica: ["Perez","hugo", "pepe", "pablo"],
        quimica: ["Molero","pedro", "mili", "alberto", "nadia"],
        logica: ["Garay","santi", "daniel","cofla", "zoko"],
        programacion: ["Chacon","cocaco", "francisco", "fernando"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }else {
        return materias;
    }
}



const mostrarInfo = (materia) => {
    let informacion = obtenerInfo(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style = "color:red">${profesor} </b> <br>
            Los alumnos inscriptos son: <b style = "color:blue">${alumnos}</b> <br><br>
            `); 
    }
}

const cantidadClases = (alumno) => {
    let informacion = obtenerInfo();
    let cantidad = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidad++;
        }
    }
    return cantidad;
}


mostrarInfo("matematica");
mostrarInfo("quimica");
mostrarInfo("logica");
mostrarInfo("programacion");

document.write(cantidadClases("cofla"));