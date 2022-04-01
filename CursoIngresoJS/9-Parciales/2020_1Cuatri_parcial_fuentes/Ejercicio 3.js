function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var cantidadHombres;
	var contadorCantidadHombresSolteros;
	var contadorCantidadHombresCasados;
	var contadorCantidadHombresViudos;
	var contadorCantidadMayoresViudos;
	var contadorPersonaTerceraEdad;
	var respuesta;
	var acumuladorHombresSolteros;
	var promedio;
	var acumuladorEdadSolteros;
	var contadorEdadSolteros;
	var banderaDelPrimero;
	var maximo;
	var nombreTemperaturaMayor;

	respuesta=true;
	contadorCantidadHombresSolteros=0;
	contadorCantidadHombresCasados=0;
	contadorCantidadHombresViudos=0;
	contadorPersonaTerceraEdad=0;
	contadorCantidadMayoresViudos=0;
	acumuladorEdadSolteros=0;
	contadorCantidadHombresSolteros=0;
	banderaDelPrimero=true;


	while(respuesta==true)
	{
			
		nombreIngresado = prompt("Por favor, ingrese su nombre:");
		edadIngresada = prompt("Por favor, ingrese su edad:");
		edadIngresada = parseInt(edadIngresada);
		temperaturaCorporalIngresada = prompt("Ingrese su temperatura corporal:");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);

		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado = prompt("Por favor, ingrese sexo m o f (masculino o femenino):");
		}

		while(estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado = prompt("Por favor, ingrese su estado civil (casado, soltero o viudo):");
		}

		respuesta = confirm("Desea ingresar más personas?");

		switch(estadoCivilIngresado)
		{
			case "soltero":
			if(sexoIngresado=="m")
			{
				contadorCantidadHombresSolteros++;
				acumuladorEdadSolteros+=edadIngresada;
			}
			break;
			case "casado":
			if(sexoIngresado=="m")
			{
				contadorCantidadHombresCasados++;
			}
			break;
			case "viudo":
			if(sexoIngresado=="m")
			{
				contadorCantidadHombresViudos++;
			}
			break;
			default:
			if(edadIngresada>17 && estadoCivilIngresado=="viudo")
			{
				contadorCantidadMayoresViudos++;
			}
			break;
		}

		if(edadIngresada>59 && temperaturaCorporalIngresada>=38)
		{
			contadorPersonaTerceraEdad++;
		}

		if(banderaDelPrimero==true || temperaturaCorporalIngresada>maximo)
		{
			maximo = temperaturaCorporalIngresada;
			nombreTemperaturaMayor = nombreIngresado;
			banderaDelPrimero = false;
		}

	}


	promedio = acumuladorEdadSolteros / contadorCantidadHombresSolteros;

    
	document.write("La persona con mas temperatura es " + nombreTemperaturaMayor + "<br>");
	document.write(contadorCantidadHombresViudos + " hombres mayores de edad están viudos <br>");
	document.write("Hay " + contadorCantidadHombresSolteros + " hombres solteros y " + contadorCantidadHombresViudos + " hombres viudos <br>");
	document.write(contadorPersonaTerceraEdad + " tienen más de 38 de temperatura <br>");
	document.write("El promedio de edad entre los hombres solteros es " + promedio);
}
