function mostrar() {
	//tomo el mes
	var mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch (mesDelAño) {
		case "Febrero":
			alert("Mes con 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Mes con 30 días");
			break;
		default:
			alert("mes con 31 días");
			break;
	}
} 