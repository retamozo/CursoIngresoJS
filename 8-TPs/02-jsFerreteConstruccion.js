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
    var perimetro;
    var cantidadAlambre;
    var cantidadHilos = 3;
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    perimetro = parseInt(largo * 2) + parseInt(ancho * 2);
    cantidadAlambre = perimetro * cantidadHilos;
    alert(`Usted debe comprar ${cantidadAlambre}ms de alambre`);
}
function Circulo() {
    var radio;
    var perimetro;
    var cantidadAlambre;
    var cantidadHilos = 3;
    //  
    //  
    radio = document.getElementById("txtIdRadio").value;
    perimetro = Math.PI * 2 * radio;

    cantidadAlambre = perimetro * cantidadHilos;
    alert(`usted debe comprar ${cantidadAlambre.toFixed(2)}m2 de alambre`);
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

    largo = parseInt(largo)
    ancho = parseInt(ancho)

    bolsasCementoTotal = largo * bolsaCementoBase
    bolsasCalTotal = ancho * bolsaCalBase

    alert(`usted debe comprar ${bolsasCementoTotal} bolsas de cemento y ${bolsasCalTotal} bolsas de cal`)

}
