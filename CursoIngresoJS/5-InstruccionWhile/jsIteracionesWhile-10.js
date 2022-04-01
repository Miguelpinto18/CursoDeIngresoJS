/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.X
2-Suma de los positivos.X
3-Cantidad de positivos.X
4-Cantidad de negativos.X
5-Cantidad de ceros.X
6-Cantidad de números pares.X
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).
10-De los positivos el mas grande
11-De los negativos el mas chico */
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var acumuladorPositivos;
	var acumuladorNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var maximoPositivo;
	var banderaPrimerPositivo;
	var minimoNegativo;
	var banderaPrimerNegativo;

	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;	
	respuesta = true;
	banderaPrimerNegativo = true;
	banderaPrimerPositivo = true;
	

	while(respuesta==true)//Por cada numero
	{
		numeroIngresado = prompt("Ingrese un numero: "); 
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			acumuladorPositivos +=numeroIngresado; // acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos++;

			if(contadorPositivos==1 || numeroIngresado>maximoPositivo)
			{
				maximoPositivo = numeroIngresado;
			}
		}
		else
		{
			if(numeroIngresado<0)
			{
				acumuladorNegativos +=numeroIngresado;
				contadorNegativos++;
				if(contadorNegativos==1 || numeroIngresado<minimoNegativo)
				{
					minimoNegativo = numeroIngresado;
				}
			}
			else
			{
				contadorCeros++;
			}
		}

		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}


		respuesta = confirm("Quiere ingresar otro numero?");
	}

	
	diferencia = acumuladorPositivos - acumuladorNegativos;

	document.write("La suma de los positivos es: " + acumuladorPositivos + "<br>");
	document.write("La suma de los negativos es: " + acumuladorNegativos + "<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("La cantidad de pares es: " + contadorPares + "<br>");
	if(contadorPositivos>0)
	{
		promedioPositivos = acumuladorPositivos/contadorPositivos;
		document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
	}
	else
	{
		document.write("El promedio de positivos no se pudo calcular<br>");
	}

	if(contadorNegativos>0)
	{
		promedioNegativos = acumuladorNegativos/contadorNegativos;
		document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
	}
	else
	{
		document.write("El promedio de negativos no se pudo calcular<br>");
	}
	
	document.write("La diferencia entre positivos y negativos es: " +diferencia+ "<br>");
	document.write("El maximo de los positivos es: " +maximoPositivo+ "<br>");
	document.write("El minimo de los negativos es: " +minimoNegativo+ "<br>");
	



}//FIN DE LA FUNCIÓN