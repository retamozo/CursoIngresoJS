/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	var numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value)
	var numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value)
	alert(`La suma es ${numeroUno + numeroDos} `);
}

function restar() {
	var numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value)
	var numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value)
	alert(`La resta es ${numeroUno - numeroDos} `);
}

function multiplicar() {
	var numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value)
	var numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value)
	alert(`La multiplicación es ${numeroUno * numeroDos} `);

}

function dividir() {
	var numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value)
	var numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value)
	alert(`La divison es ${numeroUno / numeroDos} `);
}

