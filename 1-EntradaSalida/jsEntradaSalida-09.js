/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	var sueldo = parseInt(document.getElementById('txtIdSueldo').value)
	var diezmo = (sueldo * 10) / 100
	var total = sueldo + diezmo
	document.getElementById('txtIdResultado').value = total
}
