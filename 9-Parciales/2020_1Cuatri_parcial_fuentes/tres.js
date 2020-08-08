// Bienvenidos.
// En el ingreso a un viaje en avion nos solicitan nombre , 
// edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo") 
// y temperatura corporal.

// a) El nombre de la persona con mas temperatura.
// b) Cuantos mayores de edad estan viudos
// c) La cantidad de hombres que hay solteros o viudos.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre los hombres solteros.

function mostrar() {

	var sexo;
	var estadoCivil;
	var temperatura;
	var edad;
	var mayorTemperatura;
	var personaMayorTemperatura;
	var contadorMayorEdadViudo = 0
	var contadorHombreSoltero = 0
	var contadorViudo = 0
	var contadorTerceraEdadTemperatura = 0;
	var promedioEdadSoltero;
	var acumuladorHombreSoltero = 0;
	var primeraTemperaturaIngresada = true
	var continuarIngresando;

	do {
		do {
			nombre = prompt('Por favor, ingrse su nombre')
		} while (!nombre || nombre === '')

		do {
			edad = parseInt(prompt('Por favior, ingrese su edad'))
		} while (isNaN(edad))

		do {
			sexo = prompt('Por favor, ingrese su sexo indicando "f" o "m"').toLocaleLowerCase()
		} while (sexo !== 'f' && sexo !== 'm')

		do {
			estadoCivil = prompt('Ingrese su estado civil segun corresponda: casado, soltero o viudo').toLocaleLowerCase()
		} while (estadoCivil !== 'soltero' && estadoCivil !== 'casado' && estadoCivil !== 'viudo')

		do {
			temperatura = parseInt(prompt('Por favor, ingrese su temperatura corporal'))
		} while (isNaN(temperatura))


		if (primeraTemperaturaIngresada) {
			primeraTemperaturaIngresada = false
			mayorTemperatura = temperatura
			personaMayorTemperatura = nombre
		}

		if (edad > 17) {
			contadorMayorEdadViudo++
		}
		else {
			if (edad > 60 && temperatura > 38) {
				contadorTerceraEdadTemperatura++
			}
		}

		if (sexo === 'm') {
			switch (estadoCivil) {
				case 'soltero':
					contadorHombreSoltero++
					acumuladorHombreSoltero += edad;
					promedioEdadSoltero = acumuladorHombreSoltero / contadorHombreSoltero
					break
				case 'viudo':
					contadorViudo++
					break
			}
		}

		if (temperatura > mayorTemperatura) {
			mayorTemperatura = temperatura
			personaMayorTemperatura = nombre
		}
		continuarIngresando = confirm('Continuar ingresando pasajeros ?')
	} while (continuarIngresando)


	alert(`
	Nombre de la persona con más temperatura: ${personaMayorTemperatura}
	Cantidad de Mayores de edad viudos: ${contadorMayorEdadViudo}
	Cantidad de hombres solteros : ${contadorHombreSoltero}
	Cantidad de hombres viudos : ${contadorViudo}
	Personas de la tercera edad +60 años con temperatura > 38 : ${contadorTerceraEdadTemperatura}
	Promedio de hombres solteros: ${promedioEdadSoltero}
	`)

}
