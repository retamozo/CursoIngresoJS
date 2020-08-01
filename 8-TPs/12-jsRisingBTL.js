/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
  var edad;
  var sexo;
  var estadoCivil;
  var sueldoBruto;
  var numeroLegajo;
  var nacionalidad;

  // estadoCivil = document.getElementById("txtIdEstadoCivil").value;
  // sueldoBruto = document.getElementById("txtIdSueldo").value;
  // numeroLegajo = document.getElementById("txtIdLegajo").value;
  // nacionalidad = document.getElementById("txtIdNacionalidad").value;

  edad = parseInt(prompt("Por favor, ingrese una edad válida"));
  while (edad < 17 || edad > 91) {
    alert("por favor, ingresa una edad válida");
    edad = parseInt(
      prompt("Por favor, ingrese una edad válida entre 18 y 90 inclusive")
    );
  }
  document.getElementById("txtIdEdad").value = edad;

  sexo = prompt('Ingrese su sexo, "M" para masculino, "F" para femenino');
  while (sexo !== "M" && sexo !== "F") {
    alert("ingrese un sexo válido");
    sexo = prompt('Ingrese su sexo, "M" para masculino, "F" para femenino');
  }
  document.getElementById("txtIdSexo").value = sexo;

  estadoCivil = prompt(
    "Ingrese su estado civil \n 1 para soltero, \n 2 para casados \n 3 para divorciados \n 4 para viudos"
  );

  while (estadoCivil < 1 || estadoCivil > 4) {
    alert("ingresar estado civil válido");
    estadoCivil = prompt(
      "Ingrese su estado civil \n 1 para soltero, \n 2 para casados \n 3 para divorciados \n 4 para viudos"
    );
  }
  switch (estadoCivil) {
    case "1":
      estadoCivil = "Soltero";
      break;
    case "2":
      estadoCivil = "Casado";
      break;
    case "3":
      estadoCivil = "Divorciado";
      break;
    case "4":
      estadoCivil = "Viudo";
      break;
  }
  document.getElementById("txtIdEstadoCivil").value = estadoCivil;

  sueldoBruto = parseInt(prompt("Por favor, ingrese su sueldo bruto"));
  while (sueldoBruto < 8000) {
    alert("Por favor, ingrese un monto mayor a 8000");
    sueldoBruto = parseInt(prompt("Por favor, ingrese su sueldo bruto"));
  }
  document.getElementById("txtIdSueldo").value = sueldoBruto;

  numeroLegajo = prompt("Por favor ingrese su número de legajo");

  while (numeroLegajo < 1000) {
    alert("sin ceros a la izquierza");
    numeroLegajo = prompt("Por favor ingrese su número de legajo");
  }
  document.getElementById("txtIdLegajo").value = numeroLegajo;

  nacionalidad = prompt(
    "Por favor, ingrese su nacionalidad. \n indicando A para argentinos \n E para extranjeros \n N para nacionalizados"
  );
  while (nacionalidad !== "A" && nacionalidad !== "E" && nacionalidad !== "N") {
    debugger;
    alert("Ingrese una nacionalidad válida");
    nacionalidad = prompt("Por favor ingrese una nacionalidad");
  }
  switch (nacionalidad) {
    case "A":
      nacionalidad = "Argentino";
      break;
    case "E":
      nacionalidad = "Extranjero";
      break;
    case "N":
      nacionalidad = "Nacionalizado";
      break;
  }
  document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
