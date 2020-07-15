/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	var dividendo = parseInt(document.getElementById('txtIdNumeroDividendo').value)
	var divisor = parseInt(document.getElementById('txtIdNumeroDivisor').value)
	alert(`resto de division = ${dividendo % divisor}`);
}
