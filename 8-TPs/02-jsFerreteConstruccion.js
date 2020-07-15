/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo;
    var ancho;
    var area;
    var cantidadAlambre;
    var cantidadHilos = 3;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    area = parseInt(largo) * parseInt(ancho);
    cantidadAlambre = area * cantidadHilos;
    alert(`Usted debe comprar ${cantidadAlambre}ms de alambre`);
}
function Circulo() {
    var radio;
    var area;
    var cantidadAlambre;
    var cantidadHilos = 3;

    radio = document.getElementById("txtIdRadio").value;
    area = 3.14 * Math.pow(parseInt(radio), 2);

    cantidadAlambre = area * cantidadHilos;
    alert(`usted debe comprar ${cantidadAlambre}m2 de alambre`);
}
function Materiales() {
    var largo;
    var ancho;
    var bolsasCementoTotal;
    var bolsasCalTotal;
    var bolsaCementoBase = 2;
    var bolsaCalBase = 3;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    bolsasCementoTotal = parseInt(largo) * bolsaCementoBase
    bolsasCalTotal = parseInt(ancho) * bolsaCalBase

    alert(`usted debe comprar ${bolsasCementoTotal} bolsas de cemento y ${bolsasCalTotal} bolsas de cal`)

}
