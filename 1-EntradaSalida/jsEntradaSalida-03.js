/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	var name = document.getElementById('txtIdNombre').value
	if (name !== "") {
		alert(name)
	} else alert('ingrese un nombre')
}


