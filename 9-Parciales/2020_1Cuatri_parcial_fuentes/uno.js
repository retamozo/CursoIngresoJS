/**
	 Debemos realizar la carga de 5(cinco) productos de prevención de contagio,

	de cada una debo obtener los siguientes datos:
	   a - el tipo (validar "barbijo" , "jabón" o "alcohol") ,
       b-  el precio (validar entre 100 y 300),
	   c - la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	   d - la Marca 
	   e - el fabricante.

	Se debe Informar al usuario lo siguiente:
	a) Del más barato de los alcohol : 
		-  la cantidad de unidades  
		-  fabricante

	b) Del tipo con mas unidades
		- el promedio por compra
		
	c) Cuántas unidades de jabones hay en totals
 */

function mostrar() {
	var cantidadUnidades;

	var precioMinimoAlcohol;
	var cantidadAlcohol;
	var fabricanteAlcohol;

	var acumuladorCantidadJabon = 0;

	var precioIngresado;
	var productoIngresado;
	var marcaIngresada;
	var cantidadMaxima;
	var fabricanteIngresado;
	var esPrimerPrecioMinimo = true;

	var acumuladorJabon;
	var acumuladorAlcohol;
	var acumuladorBarbijo;

	var precioCompraAlcohol;
	var precioCompraBarbijo;

	for (var i = 0; i < 2; i++) {
		do {
			productoIngresado = prompt("ingresar un producto (barbijo, jabon o alcohol");
		} while (
			productoIngresado !== "barbijo" &&
			productoIngresado !== "jabon" &&
			productoIngresado !== "alcohol"
		);

		do {
			precioIngresado = parseInt(
				prompt("Por favor, ingrese el precio del producto")
			);
		} while (precioIngresado < 100 || precioIngresado > 300);

		do {
			cantidadUnidades = parseInt(
				prompt("por favor, ingrese cant. de unidades (entre 1 y 1000)")
			);
		} while (cantidadUnidades <= 0 || cantidadUnidades > 1000);

		do {
			marcaIngresada = prompt("Ingresar la marca");
		} while (marcaIngresada == "");

		do {
			fabricanteIngresado = prompt("Ingresar el fabricante");
		} while (fabricanteIngresado == "");

		if (esPrimerPrecioMinimo && productoIngresado == 'alcohol') {
			esPrimerPrecioMinimo = false;
			precioMinimoAlcohol = precioIngresado;
		}

		switch (productoIngresado) {
			case "alcohol":
				precioCompraAlcohol += precioIngresado
				acumuladorAlcohol += cantidadUnidades
				if (precioIngresado < precioMinimoAlcohol) {
					precioMinimoAlcohol = precioIngresado;
					fabricanteAlcohol = fabricanteIngresado;
					cantidadAlcohol = cantidadUnidades;
				}
				break;
			case "jabon":
				precioCompraAlcohol += precioIngresado
				acumuladorJabon += cantidadUnidades
				acumuladorCantidadJabon += cantidadUnidades;
				break;
			case 'barbijo':
				precioCompraBarbijo += precioIngresado
				acumuladorBarbijo += cantidadUnidades
				break
		}
	}

	if (acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon) {
		cantidadMaxima = acumuladorBarbijo

	} else {
		if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo) {
			cantidadMaxima = acumuladorAlcohol
		} else {
			cantidadMaxima = acumuladorJabon
		}
	}
	/**
	 * 	Se debe Informar al usuario lo siguiente:
		a) Del más barato de los alcohol : 
			-  la cantidad de unidades  
			-  fabricante
	
		b) Del tipo con mas unidades
			- el promedio por compra
			
		c) Cuántas unidades de jabones hay en total
	 */
	alert(
		`
		Del alcohol más barato: 
		cantidad de unidades: ${cantidadAlcohol}
		fabricante: ${fabricanteAlcohol}
		`
	)
}
