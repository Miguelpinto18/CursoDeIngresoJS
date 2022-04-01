// Miguel Pinto Division D
/*Enunciado: 6 corregido
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
    edad = parseInt(edad);
 
	if(edad<13)
	{
		alert("Es ñino");
	}

    if(edad>=13 && edad<=17)	
	{
	    alert("Es adolescente");
	}

    if(edad>18)
	{
		alert("Es adulto");
	}

		


}//FIN DE LA FUNCIÓN