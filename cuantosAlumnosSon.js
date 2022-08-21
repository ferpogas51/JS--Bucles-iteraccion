
let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];


for (i=0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "P" || presencia =="p"){
    	alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
		tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br><br>
	________Presencias: ${alumnosTotales[alumno][1]} <br><br>
	________Ausencias: ${30 - (alumnosTotales[alumno][1])}
	<br><br>`;
	if (30 - alumnosTotales [alumno][1] > 10) {
    resultado+= `<b style="color:red"> REPROBADO POR INASISTENCIA </b><br><br>`;
	} else {
		resultado+= "<br><br>"
	} document.write(resultado)
};