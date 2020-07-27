function mostrar() {
	var destinoIngresado;
	destinoIngresado = document.getElementById('txtIdDestino').value;
	switch (destinoIngresado) {
		case 'Bariloche':
		case 'Ushuaia':
			alert('Sur')
			break
		case 'Cataratas':
			alert('Norte')
			break
		case 'Mar del plata':
			alert('Este')
			break
	}
	// cambié el value 
}
//FIN DE LA FUNCIÓN