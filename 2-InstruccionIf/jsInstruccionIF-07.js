function mostrar() {
	var edad = parseInt(document.getElementById('txtIdEdad').value)
	var estadoCivil = document.getElementById('estadoCivil').value

	if (edad < 18 && estadoCivil === 'Soltero') {

		alert('Es muy pequeño para no ser soltero')
	} console.log(estadoCivil);
}//FIN DE LA FUNCIÓN