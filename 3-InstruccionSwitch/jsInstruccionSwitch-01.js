function mostrar() {
	//tomo el mes
	var mesDelAño;
	//es indiferente el usp de break o return en este caso ?
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) {
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}
}
//FIN DE LA FUNCIÓN
