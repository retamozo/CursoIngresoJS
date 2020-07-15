/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	var importe = parseInt(document.getElementById('txtIdImporte').value)
	var descuuento = importe * 25 / 100
	var resultado = document.getElementById('txtIdResultado')
	alert(`Descuento : ${descuuento}`)
	resultado.value = importe - descuuento
}
