function mostrar() {
	var edad;
	edad = document.getElementById('txtIdEdad').value
	edad = parseInt(edad)
	if (edad >= 18) {
		alert('usted es mayor de edad')
	}
}//FIN DE LA FUNCIÓN