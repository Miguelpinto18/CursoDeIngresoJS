/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;

	clave = prompt("Ingrese el numero clave");

	while(clave != "utn750")
	{
		clave = prompt("Clave invalida. Vuelva a ingresar la clave");
		
	}
	
	alert("La clave es correcta. ¡Bienvenido! ");


	
}//FIN DE LA FUNCIÓN
