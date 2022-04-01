// Miguel Pinto Division D 
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	

	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = primerNumero + segundoNumero;

	alert(" La suma es " + suma);	

}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);

	segundoNumero = parseInt (document.getElementById("txtIdNumeroDos").value);

	resta = primerNumero - segundoNumero;
	
	alert(" La suma es " + resta);

}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicacion;

	primerNumero = parseInt(document.getElementById('txtIdNumeroUno').value);

	segundoNumero = parseInt (document.getElementById('txtIdNumeroDos').value);

	multiplicacion = primerNumero * segundoNumero;
	
	alert(" La suma es " + multiplicacion);	
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var division;

	primerNumero = parseInt(document.getElementById('txtIdNumeroUno').value);

	segundoNumero = parseInt (document.getElementById('txtIdNumeroDos').value);

	division = primerNumero / segundoNumero;
	
	alert(" La suma es " +  division);

}

