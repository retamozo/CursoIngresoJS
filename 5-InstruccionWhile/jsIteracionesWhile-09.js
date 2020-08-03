/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	// declarar variables
	var primeraVez;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuarIngresando;
	//iniciar variables
	primeraVez = true
	// continuarIngresando = true

	do {
		do {
			numeroIngresado = parseInt(prompt("Ingrese un número"));
		} while (isNaN(numeroIngresado));

		if (primeraVez) {
			primeraVez = false
			numeroMaximo = numeroIngresado
			numeroMinimo = numeroIngresado

		} else {
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado
			}
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado
			}
		}
		continuarIngresando = confirm("desea continuar?");
	} while (continuarIngresando);

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
} //FIN DE LA FUNCIÓN
