function mostrar() {
	var edad = parseInt(document.getElementById('txtIdEdad').value)
	if (!(edad > 12 && edad < 18)) {
		alert('no es adolescente')
	}
}//FIN DE LA FUNCIÓN