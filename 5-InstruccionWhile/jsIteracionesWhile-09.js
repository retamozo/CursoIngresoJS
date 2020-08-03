/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuarIngresando;
	//iniciar variables
	banderaDelPrimero = "es el primero";
	continuarIngresando = true

	while (continuarIngresando) {
		numeroIngresado = parseInt(prompt('Ingrese un número'))
		
		continuarIngresando = confirm("desea continuar?");
	}
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimmo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN