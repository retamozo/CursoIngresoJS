function mostrar() {
	// var horaDelDia =
	// 	horaDelDia = document.getElementById("txtIdHora").value
	// switch (horaDelDia) {
	// 	case "0":
	// 	case "1":
	// 	case "2":
	// 	case "3":
	// 	case "4":
	// 	case "5":
	// 	case "6":
	// 	case "20":
	// 	case "21":
	// 	case "22":
	// 	case "23":
	// 	case "24":
	// 		alert("Es de noche");
	// 		break
	// 	case "7":
	// 	case "8":
	// 	case "9":
	// 	case "10":
	// 	case "11":
	// 	case "12":
	// 		alert("Es de mañana");
	// 		break;
	// 	case "13":
	// 	case "14":
	// 	case "16":
	// 	case "17":
	// 	case "18":
	// 	case "19":
	// 		alert("Es de tarde");
	// 		break;
	// 	default:
	// 		alert("la hora no existe");
	// 		break
	// }

	// op 2
	var horaDelDia;
	var mañana;
	var tarde;
	var noche;
	var noExiste

	horaDelDia = document.getElementById("txtIdHora").value
	mañana = horaDelDia >= 7 && horaDelDia < 12
	tarde = horaDelDia >= 11 && horaDelDia < 20
	noche = (horaDelDia >= 0 && horaDelDia < 7) || (horaDelDia >= 20 && horaDelDia < 25)
	noExiste = !mañana && !tarde && !noche

	switch (true) {
		case mañana:
			alert('Es de mañana');
			break
		case tarde:
			alert('Es de tarde')
			break
		case noche:
			alert('es de noche')
			break
		case noExiste:
			alert('la hora no existe')
			break
	}
} //FIN DE LA FUNCIÓN
