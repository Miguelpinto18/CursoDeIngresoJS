// Miguel Pinto DIvision D
/* 
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste */

function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			alert("Usted se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("Usted se encuentra en Este");
			break;
		case "Bariloche":
			alert("Usted se encuentra en el Oeste");
			break;
		case "Ushuaia":
			alert("Usted se encuentra en el Sur");
			break;				



	}

}//FIN DE LA FUNCIÓN