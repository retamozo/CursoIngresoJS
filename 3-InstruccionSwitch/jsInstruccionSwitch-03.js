function mostrar() {
	//tomo el mes
	var mesDelAño;
	mesDelAño = document.getElementById('txtIdMes').value
	switch (mesDelAño) {
		case 'Febrero':
			alert('este mes no tiene más de 29 días');
			break;
		default:
			alert('Este mes tiene 30 o más días')
			break;
	}
}//FIN DE LA FUNCIÓN