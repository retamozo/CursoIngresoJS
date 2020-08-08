function mostrar() {
	var numero;
	var contador = 0;
	numero = parseInt(prompt("Por favor ingrese un valor"));
	for (var i = 0; i < numero; i++) {
		if (i % 2 == 0 && i !== 0) {
			contador++
			console.log(i)
		}
	}
	console.log('contador >', contador)
}
//FIN DE LA FUNCIÓN
