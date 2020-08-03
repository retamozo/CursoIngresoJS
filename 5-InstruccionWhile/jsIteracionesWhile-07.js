/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	var contador;
	var acumulador;
	var seguirIngresando;
	var numeroIngresado;
	contador = 0;
	acumulador = 0;
	seguirIngresando = true;

	while (seguirIngresando) {
		numeroIngresado = parseInt(prompt("Ingresar un número"));
		acumulador += numeroIngresado;
		contador++;
		seguirIngresando = confirm("Desea seguir ingresando valores?");
	}
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;
}
//FIN DE LA FUNCIÓN
