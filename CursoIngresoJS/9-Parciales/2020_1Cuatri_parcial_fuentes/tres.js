/*
function mostrar()
{	

	let raza;
	let nombre;
	let edad;
	let peso;
	let precioConsulta;
	let respuesta;
	let acumCostoVacunas;
	let descuento;
	let contadorPerros;
	let acumSharpei;
	let acumGalgo;
	let acumPastor;
	let mensajeA;
	let mensajeB;
	let mensajeC;
	let mensajeD;
	let banderaPerro;
	let nombrePerroViejo;
	let razaPerroViejo;
	let edadPerroViejo;

	banderaPerro = true;
	acumGalgo = 0;
	acumSharpei = 0;
	acumPastor = 0;
	acumCostoVacunas = 0;
	descuento = 0;
	contadorPerros = 0;
	respuesta = 'si';

	while (respuesta == 'si')
		{

			// prompts

			raza = prompt('ingrese la raza del perro', 'sharpei, galgo, pastor');
			while (raza != 'sharpei' && raza != 'pastor' && raza != 'galgo')
			{
				raza = prompt('error, reingrese la raza del perro', 'sharpei, galgo, pastor');
			}

			nombre = prompt('ingrese el nombre de su perro');

			edad = prompt('ingrese la edad de su perro, entre 1 y 15 años');
			edad = parseInt(edad);
			while(edad < 1 || edad > 15)
			{
				edad = prompt('error, ingrese la edad de su perro, entre 1 y 15 años');
				edad = parseInt(edad);
			}
			
			peso = prompt('ingrese el peso de su perro');
			peso = parseInt(peso);
			while(peso < 0)
			{
				peso = prompt('error, reingrese el peso de su perro');
				peso = parseInt(peso);
			}

			precioConsulta = prompt('Ingrese el precio de la consulta');
			precioConsulta = parseInt(precioConsulta);
			while (isNaN(precioConsulta)==true)
			{
				precioConsulta = prompt('error, Ingrese el precio de la consulta');
				precioConsulta = parseInt(precioConsulta);
			}

			acumCostoVacunas = acumCostoVacunas + precioConsulta;
			contadorPerros++;


			// C
			switch (raza)
			{
				case "pastor":
					acumPastor=acumPastor++;
				case "galgo":
					acumGalgo=acumGalgo++;
					break;
				case "sharpei":
					acumSharpei=acumSharpei++;
					break;
			}

			// D 
			if (banderaPerro == true)
			{
				banderaPerro = false;
				nombrePerroViejo = nombre;
				razaPerroViejo = raza;
				edadPerroViejo = edad;
			}
			else if (edad > edadPerroViejo)
			{
				nombrePerroViejo = nombre;
				razaPerroViejo = raza;
				edadPerroViejo = edad;
			}

			respuesta = prompt('desea continuar?', 'si')
		}

	// a
	mensajeA = 'el precio total de las vacunas sin descuento es de ' + acumCostoVacunas;

	// b
	if (contadorPerros>2)
	{
		descuento = 20;
	}
	else if (contadorPerros>4)
	{
		descuento = 30;
	}

	if (descuento == 0)
	{
		mensajeB = '; No hay descuento'
	}
	else
	{
		precioDescontado = (acumCostoVacunas*descuento)/100;
		precioDescontado = acumCostoVacunas - precioDescontado
		mensajeB = '; el precio con descuento es de ' + precioDescontado + ' y el descuento fue de ' + descuento + '%';
	}

	// C
	if (acumSharpei > acumPastor && acumSharpei > acumGalgo)
	{
		mensajeC = '; la raza con mayor cantidad de perros es sharpei'
	}
	else if (acumPastor > acumGalgo)
	{
		mensajeC = '; la raza con mayor cantidad de perros es pastor'
	}
	else
	{
		mensajeC = '; la raza con mayor cantidad de perros es galgo'
	}

	// D 
	mensajeD = '; El perro mas viejo se llama ' + nombrePerroViejo + ' tiene ' + edadPerroViejo + ' años y es de la raza ' + razaPerroViejo;

	alert(mensajeA + mensajeB + mensajeC + mensajeD);

}	*/


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
