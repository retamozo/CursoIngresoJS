/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	var firstNumber = parseInt(document.getElementById('txtIdNumeroUno').value)
	var secondNumber = parseInt(document.getElementById('txtIdNumeroDos').value)
	alert(firstNumber + secondNumber)
}

