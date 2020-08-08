function mostrar() {

	var numero;
	var cantidadDivisores

	numero = parseInt(prompt('Ingrese un num'))
	for (var i = 1; i < numero; i++) {
		if (numero % i == 0) {
			console.log(i)
		}
	}
}//FIN DE LA FUNCIÓN