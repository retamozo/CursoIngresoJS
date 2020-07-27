function mostrar() {
	var notaRandom = Math.floor((Math.random() * 10) + 1)
	if (notaRandom < 4) {
		alert(`Nota : ${notaRandom} , Vamos, la prox se puede`)
	} else {
		if (notaRandom > 3 && notaRandom < 9) {
			alert(`Nota : ${notaRandom} , Aprobo`)
		} else
			alert(`Nota : ${notaRandom}: Excelente `)
	}
}

//FIN DE LA FUNCIÓN