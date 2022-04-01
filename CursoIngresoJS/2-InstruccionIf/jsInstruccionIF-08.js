// Miguel Pinto Div D 

/* Enunciado: 8
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

function mostrar()
{
	var edad;
	var estadoCivil;
	
	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('txtIdEstadoCivil').value;

	edad = parseInt(Edad);

	if(edad<18 && estadoCivil != "Soltero")
	{
		alert("Es soltero y no es menor");
	}
	    
		 
	
	
}//FIN DE LA FUNCIÓN