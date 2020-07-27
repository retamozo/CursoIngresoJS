function mostrar() {
  var edad;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);
  if (edad < 13) 
  {
    alert("menor de 13 años");
  } 
  else 
  {
	  if (edad > 12 && edad < 18) 
	  {
		alert("es adolescente");
	  } 
	  else 
	  { 
		alert("mayor de 18");
	  }
  }
} //FIN DE LA FUNCIÓN
