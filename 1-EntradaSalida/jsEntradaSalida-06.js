/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	const firstNumber = parseInt(document.getElementById('txtIdNumeroUno').value)
	const secondNumber = parseInt(document.getElementById('txtIdNumeroUno').value)
	console.log(firstNumber);
	console.log(secondNumber);
	alert(firstNumber + secondNumber)
}

