// Miguel Pinto Division D
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var importe; 
	var porcentaje;
	var total;

	importe = document.getElementById('txtIdSueldo').value;

	importe = parseInt(importe);

	porcentaje = importe * 0.1; 

	/* Forma 1 */

	total = importe + porcetaje;

    document.getElementById('txtIdResultado').value;

	/* Forma 2 

	total = importe + (importe * 0.1);

	document.getElementById('txtIdResultado').value; = total; */

	/* Forma 3 

	document.getElementById('txtIdResultado').value; = total; */

}
