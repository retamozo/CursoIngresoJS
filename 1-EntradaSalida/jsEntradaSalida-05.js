/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
	const name = document.getElementById('txtIdNombre').value
	const age = document.getElementById('txtIdEdad').value
	if (name !== "" && age !== "") alert(`Usted se llama ${name} y tiene ${age} anios`);
}

