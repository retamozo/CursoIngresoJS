/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    var precioUno;
    var precioDos;
    var precioTres;
    var sumatoriaPrecios;
    precioUno = document.getElementById('txtIdPrecioUno').value
    precioDos = document.getElementById('txtIdPrecioDos').value
    precioTres = document.getElementById('txtIdPrecioTres').value;

    sumatoriaPrecios = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)

    alert(sumatoriaPrecios)
}
function Promedio() {
    var precioUno;
    var precioDos;
    var precioTres;
    var totalPrecios;
    var promedioPrecios;
    precioUno = document.getElementById('txtIdPrecioUno').value
    precioDos = document.getElementById('txtIdPrecioDos').value
    precioTres = document.getElementById('txtIdPrecioTres').value;

    totalPrecios = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)
    promedioPrecios = totalPrecios / 3

    alert(promedioPrecios)
}
function PrecioFinal() {
    var precioUno;
    var precioDos;
    var precioTres;
    var sumatoriaPrecios;
    var valorIva;
    var totalFinal;
    precioUno = document.getElementById('txtIdPrecioUno').value
    precioDos = document.getElementById('txtIdPrecioDos').value
    precioTres = document.getElementById('txtIdPrecioTres').value;

    sumatoriaPrecios = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)
    valorIva = sumatoriaPrecios * 0.21
    totalFinal = sumatoriaPrecios + valorIva

    alert(totalFinal)
}
