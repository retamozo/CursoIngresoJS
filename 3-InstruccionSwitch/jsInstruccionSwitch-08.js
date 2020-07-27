function mostrar() {
	var destinoIngresado;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	switch (destinoIngresado) {
		case 'Bariloche':
		case 'Ushuaia':
			alert('FRIO')
			break
		default: alert('CALOR')
	}
}
//FIN DE LA FUNCIÓN