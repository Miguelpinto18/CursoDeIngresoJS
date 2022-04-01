// Miguel Pinto Division D 
 /*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroIngresadoUno;
	var numeroIngresadoDos;
	var resultado;

	numeroIngresadoUno = txtIdNumeroUno.value;
	numeroIngresadoDos = txtIdNumeroDos.value;

	numeroIngresadoUno = parseInt(numeroIngresadoUno);
	numeroIngresadoDos = parseInt(numeroIngresadoDos);


	resultado = numeroIngresadoUno + numeroIngresadoDos;

	alert(" La suma es " + resultado);
}

