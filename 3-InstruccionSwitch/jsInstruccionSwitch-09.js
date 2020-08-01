function mostrar() {
	var estacionIngresada;
	var destino;
	var montoBase;
	var precioFinal;
	var descuento;
	var aumento;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	montoBase = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					aumento = (montoBase * 20) / 100;
					precioFinal = montoBase + aumento;
					alert(`Precio final : ${precioFinal}`);
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = (montoBase * 10) / 100;
					precioFinal = montoBase - descuento;
					alert(`Precio final : ${precioFinal}`);
					break;
				case "Mar del plata":
					descuento = (montoBase * 20) / 100;
					precioFinal = montoBase - descuento;
					alert(`Precio final : ${precioFinal}`);
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = (montoBase * 20) / 100;
					precioFinal = montoBase - descuento;
					alert(`Precio final : ${precioFinal}`);
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = (montoBase * 10) / 100;
					precioFinal = montoBase + aumento;
					alert(`Precio final : ${precioFinal}`);
					break;
				case "Mar del plata":
					aumento = (montoBase * 20) / 100;
					precioFinal = montoBase + aumento;
					alert(`Precio final : ${precioFinal}`);
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = (montoBase * 10) / 100;
					precioFinal = montoBase + aumento;
					alert(`Precio final : ${precioFinal}`);
					break;
				case "Cordoba":
					alert(`Precio final ${montoBase}`);
					break;
			}
			break;
	}
} //FIN DE LA FUNCIÓN

function Person(n, l) {
	this.n = n
	this.k = l
}
const member = new Person('hola', 'chau')

Person.getName = function () {
	return `${this.n} - ${this.l}`
}

member.getName()

