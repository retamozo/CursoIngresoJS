function mostrar() {
	var edad;
	/**
	 * 
	 * solucion 2
	 * var edad = parseInt(document.getElementById('txtIdEdad').value)
	   if (edad >= 13 && edad <= 17) {
		alert('es adolescente')
	}
	 */
	edad = document.getElementById('txtIdEdad').value
	edad = parseInt(edad)
	if (edad >= 13 && edad <= 17) {
		alert('es adolescente')
	}

}//FIN DE LA FUNCIÓN