const materias = {
        matematica: ["Perez","hugo", "pepe", "pablo"],
        quimica: ["Molero","pedro", "mili", "alberto", "nadia"],
        logica: ["Garay","santi", "daniel","cofla", "zoko"],
        programacion: ["Chacon","cocaco", "francisco", "fernando"]
}


const inscribir = (alumno,materia) => {
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if(alumno.length >= 2){
        document.write(`lo siento ${alumno}, las clases de ${materia}, están llenas`);
    }
}

inscribir("pedro", "quimica");