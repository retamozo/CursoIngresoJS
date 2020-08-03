/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var sumaPositivos;
	var multiplicacionNegativos;
	var seguirIngresando;
	var numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	seguirIngresando = true;


	while (seguirIngresando) {

		numeroIngresado = parseInt(prompt("Ingresar número"))

		if (numeroIngresado < 0) {
			multiplicacionNegativos *= numeroIngresado;
			document.getElementById('txtIdProducto').value = multiplicacionNegativos;
		}
		if (numeroIngresado > 0) {
			sumaPositivos += numeroIngresado;
			document.getElementById('txtIdSuma').value = sumaPositivos;
		}
		seguirIngresando = confirm("desea seguir ingresando valores?")
	}
}
