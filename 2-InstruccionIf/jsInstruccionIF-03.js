function mostrar() {
	/**
	 * SOLUCIÓN 1
	 var edad = parseInt(document.getElementById('txtIdEdad').value)
	 return edad > 17 ? alert('mayor de edad') : alert('menor de edad')	
	 */

	//SOLUCIÓN 2
	var edad;
	edad = document.getElementById('txtIdEdad').value
	edad = parseInt(edad)

	if (edad > 17) {
		alert('Mayor de edad')
	}
	else {
		alert('Menor de edad')
	}


}//FIN DE LA FUNCIÓN