/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {


    var farhenheit;
    var conversion;

    farhenheit = document.getElementById('txtIdTemperatura').value
    farhenheit = parseFloat(farhenheit).toFixed(2)
    conversion = farhenheit - 32 * 0.55
    conversion = parseFloat(conversion).toFixed(2)
   
    alert(` ${farhenheit} Fahrenheit son ${conversion} centígrados"`)




}

function CentigradosFahrenheit() {

}
