const materias = {
    "matematica": [90,6,4,"matematica"],
    "ingles": [80,7,3,"ingles"],
    "portugues": [70,8,2, "portugues"],
    "historia": [60,9,1,"historia"],
    "programacion": [93,10,4, "programacion"],
    "logica": [90,3,1, "logica"],
    "algebra": [90,8,2, "algebra"],
    "redes": [94,9,1,"redes"],
    "bbdd": [89,8,3, "bbdd"],
    "quimica": [92,1,4, "quimica"]
}


const aprobo = (materia)=>{
    for(materia in materias){
        let asistencias = materias[materia];
        let trabajos = materias[materia][2];
        let promedio = materias[materia][1];

        console.log(materias[materia][3] + ":");
        // asistencias mayor a 75, primer parametro de materias
        if(asistencias[0] >= 90){
            console.log(`%c  Asistencia cumplida con ${asistencias[0]}%`, "color:green");
            } else {
                console.log(`%c  Asistencia incumplida con ${asistencias[0]}%`, "color:red");
            }

        // promedio mayor a 7
        if(promedio >= 7){
            console.log(`%c  Promedio cumplido con ${promedio}`, "color:green");
            } else {
                console.log(`%c  Promedio incumplido con ${promedio}`, "color:red");
            }

        // debe entregar mas de 3 trabajos
        if(trabajos >= 3){
            console.log(`%c  Trabajos cumplidos con ${trabajos}`, "color:green");
            } else {
                console.log(`%c  Trabajos incumplidos con ${trabajos}`, "color:red");
            }

    }
}
aprobo();