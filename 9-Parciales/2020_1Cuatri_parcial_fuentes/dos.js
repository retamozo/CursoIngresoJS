// Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),
// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)

// d) Informar el tipo con mas cantidad de bolsas.
// f) El tipo mas caro

function mostrar() { 
  var productoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var descuento;
  var tipoMasCaro;
  var tipoConMayorCantidad;
  var continuarIngresando;
 
  var cantidadBolsasTotal = 0;
  var importeBruto = 0;
  var importeTotal = 0;
  var cantidadBolsaArena = 0;
  var cantidadBolsaCal = 0;
  var cantidadBolsaCemento = 0;
  var acumuladorPrecioArena = 0;
  var acumuladorPrecioCal = 0;
  var acumuladorPrecioCemento = 0;

  do {
    do {
      productoIngresado = prompt(
        "Por favor, ingrese el tipo de producto (solo arena, cal o cemento)"
      ).toLocaleLowerCase();
    } while (
      productoIngresado !== "arena" &&
      productoIngresado !== "cal" &&
      productoIngresado !== "cemento"
    );

    do {
      cantidadIngresada = parseInt(prompt('Por favor, ingrese la cantidad de bolsas'));
    } while (isNaN(cantidadIngresada) || cantidadIngresada <= 0)

    do {
      precioIngresado = parseInt(
        prompt("Por favor, ingrese el precio de la bolsa. (mayor que cero)")
      );
    } while (isNaN(precioIngresado) || precioIngresado <= 0);

    importeBruto += cantidadIngresada * precioIngresado;
    cantidadBolsasTotal += cantidadIngresada;
    
    switch (productoIngresado) {
      case "arena":
        cantidadBolsaArena += cantidadIngresada;
        acumuladorPrecioArena += precioIngresado;
        break;
      case "cemento":
        cantidadBolsaCemento += cantidadIngresada;
        acumuladorPrecioCemento += precioIngresado;
        break;
      case "cal":
        cantidadBolsaCal += cantidadIngresada;
        acumuladorPrecioCal += precioIngresado;
        break;
    }
    continuarIngresando = confirm("Desea seguir ingresando productos");
  } while (continuarIngresando);

  if (
    acumuladorPrecioArena > acumuladorPrecioCal &&
    acumuladorPrecioArena > acumuladorPrecioCemento) {
    tipoMasCaro = `Arena, precio: ${acumuladorPrecioArena}`;
  } else {
    if (acumuladorPrecioCal > acumuladorPrecioCemento) {
      tipoMasCaro = `Cal, precio: ${acumuladorPrecioCal}`
    }
    else {
      tipoMasCaro = `Cemento, precio: ${acumuladorPrecioCemento}`
    }
  }

  if (
    cantidadBolsaArena > cantidadBolsaCal &&
    cantidadBolsaArena > cantidadBolsaCemento) {
    tipoConMayorCantidad = `Arena, cantidad: ${cantidadBolsaArena}`;
  } else {
    if (cantidadBolsaCal > cantidadBolsaCemento) {
      tipoConMayorCantidad = `Cal, cantidad: ${cantidadBolsaCal}`;
    }
    else {
      tipoConMayorCantidad = `Cemento, cantidad: ${cantidadBolsaCemento}`;
    }
  }

  if (cantidadBolsasTotal > 10) {
    descuento = (importeBruto * 15) / 100;
    importeTotal = importeBruto - descuento.toFixed(2);
  } else {
    if (cantidadBolsasTotal > 30) {
      descuento = (importeBruto * 25) / 100;
      importeTotal = importeBruto - descuento.toFixed(2);
    } else {
      importeTotal = importeBruto;
    }
  }

  if (descuento) {
    alert(`
    Total bruto $${importeBruto},
    con descuento de $${descuento},pagás $${importeTotal}
    Total a pagar: $${importeTotal}
    Tipo con mayor cantidad : ${tipoConMayorCantidad}
    Tipo más caro : ${tipoMasCaro}
    `);
  } else {
    alert(`
    Total a pagar: $${importeTotal}
    Tipo con mayor cantidad : ${tipoConMayorCantidad}
    Tipo más caro : ${tipoMasCaro}
    `);
  }
}
