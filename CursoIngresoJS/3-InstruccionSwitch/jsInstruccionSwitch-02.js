// Miguel Pinto Division D 

/* Enunciado: 2
al seleccionar un mes informar.
si estamos en Invierno: "."
: "."
si ya paso el Invierno: !!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno. */

function mostrar()
{
	var mesDelAño;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{ 
		case "Febrero":
			alert("Si aún no llego el Invierno");
			break;
		case "Julio":
			alert("Si estamos en Invierno");
			break;	
		case "Agosto":
			alert("Si estamos en Invierno");
			break;
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor");
			break;
			



	}
			
	




}//FIN DE LA FUNCIÓN4