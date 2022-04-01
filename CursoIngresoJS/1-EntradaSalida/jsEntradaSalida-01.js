function mostrar()
{
	var tamañoMascota;
	var sexoMascota;
	var tipoMascota;
	var edadMascota;
	var i;
	var bandera;
	var mascotaVieja;
	var contadorPerro;
	var contaadorGato;
	var contadorOtro;
	var contadorTotal;
	var acumuladorEdadGatas;
	var contadorGatas;
	var porcentajePerro;
	var porcentajeGato
	var porcentajeOtro;
	var promedioEdadGatas;

	bandera=0;
	contadorPerro=0;
	contadorGato=0;
	contadorOtro=0;
	acumuladorEdadGatas=0;
	contadorGatas=0;
	contadorTotal=0;

	for(i=0;i<2;i++)
	{

		tamañoMascota=prompt("Ingrese tamaño de mascota");
		while(tamañoMascota!="chico" && tamañoMascota != "mediano" && tamañoMascota!= "grande")
		{
			tamañoMascota=prompt("Porfavor reingrese tamaño de mascota (Chica, Mediana, Grande");
		}

		sexoMascota=prompt("Ingrese sexo de mascota (masculino o femenino)");
		while(sexoMascota!="masculino" && sexoMascota!="femenino")
		{
			sexoMascota=prompt("Porfavor reingrese sexo de mascota (masculino o femenino)");
		}

		tipoMascota=prompt("Ingrese tipo de mascota (Perro, Gato, Otro)");
		while(tipoMascota!="perro" && tipoMascota!= "gato" && tipoMascota!="otro")
		{
			tipoMascota=prompt("Porfavor reingrese tipo de mascota (Perro, Gato, Otro)");
		}

		edadMascota=prompt("Ingrese edad de mascota");
		while(edadMascota<0)
		{
			edadMascota=prompt("Porfavor reingrese edad de mascota");			
		}
		edadMascota=parseInt(edadMascota);

		if(tamañoMascota=="mediano" || tamañoMascota=="grande")
		{
			if( bandera==0 || mascotavieja<edad)
			{
				mascotavieja=edadMascota;
			}
		}

		switch(tipoMascota)
		{
			case "perro":
				contadorPerro++;			
			break;

			case "gato":
				contadorGato++;
				if(sexoMascota=="femenino")
				{
					contadorGatas++;
					acumuladorEdadGatas=acumuladorEdadGatas+edadMascota;
				}
			break;

			case"otro":
				contadorOtro++;
			break;

		}

		contadorTotal++;


	}

	porcentajePerro= contadorPerro*100/contadorTotal;
	porcentajeGato = contadorGato*100/contadorTotal;
	porcentajeOtro = contadorOtro*100/contadorTotal;

	promedioEdadGatas= acumuladorEdadGatas/contadorGatas;

	document.write("La mascota mas vieja entre los tamaños mediano o grande tiene: " + mascotavieja + "<br>");
	document.write("El promedio de edad de las gatas es de: "+ promedioEdadGatas + "<br>");
	document.write("El porcentaje de perro es: "+ porcentajePerro + "<br>");
	document.write("El porcentaje de gato es: "+ porcentajeGato + "<br>");
	document.write("El porcentaje de otro es: "+ porcentajeOtro + "<br>");
	
}
