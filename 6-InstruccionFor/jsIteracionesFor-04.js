function mostrar() {

	for (var continuar;;) {
		continuar = confirm("desea seguir ejecutando el ciclo ?");
		if (!continuar) {
			break;
		}
	}
}
