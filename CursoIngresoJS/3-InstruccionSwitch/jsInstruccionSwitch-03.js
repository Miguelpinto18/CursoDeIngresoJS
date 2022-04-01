// Miguel Pinto Division D

/* Enunciado: 3
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */

function mostrar()
{
	var mes;

	mes = document.getElementById('txtIdMes').value;

	switch(mes) 
	{
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Enero":
		case "Marzo":		
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
			alert("Este mes tiene 30 dias");
			break;
			
		default:
			alert("Este mes tiene mas de 30 dias");


	}

	
	


}//FIN DE LA FUNCIÓN