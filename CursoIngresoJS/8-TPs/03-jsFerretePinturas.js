/* Miguel Pinto Division D
TPs 3 */

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;
	var mensaje;
	

	temperaturaFahrenheit = document.getElementById('txtIdTemperatura').value;
	temperaturaFahrenheit = parseInt(temperaturaFahrenheit);
	temperaturaCentigrados = ((temperaturaFahrenheit-32)*5/9);

	mensaje = (temperaturaFahrenheit + " Fahrenheit son " + temperaturaCentigrados.toFixed(2) + " centígrados.")

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;
	var mensaje;
	
	temperaturaCentigrados = document.getElementById('txtIdTemperatura').value;
	temperaturaCentigrados = parseInt(temperaturaCentigrados);
	temperaturaFahrenheit = ((temperaturaCentigrados*9/5)+32);


	mensaje = (temperaturaCentigrados + " Centigrados son " + temperaturaFahrenheit.toFixed(2) + " Fahrenheit.");

	alert(mensaje);
}
