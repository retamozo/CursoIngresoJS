/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	var importe;
	var descuento;
	importe = parseInt(document.getElementById('txtIdImporte').value)
	resultado = document.getElementById('txtIdResultado')
	alert(`Descuento : ${descuento}`)
	resultado.value = importe - descuento
}
