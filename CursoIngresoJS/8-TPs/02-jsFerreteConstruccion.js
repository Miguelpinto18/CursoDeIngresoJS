/* Miguel Pinto Disivion D
TPs 2 */
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadAlambre;
    var perimetroDelTerrero;
    var mensaje;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    perimetroDelTerrero = (largo + ancho) * 2;

    cantidadAlambre = perimetroDelTerrero * 3;

    mensaje = " Se deben comprar " + cantidadAlambre + " metros";

    alert(mensaje);


}

function Circulo () 
{
	var radio;
	var perimetroDelTerreno;
	var cantidadAlambre;
	var mensaje;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	perimetroDelTerreno = 2 * Math.PI * radio;

	cantidadAlambre = perimetroDelTerreno * 3;

	mensaje = "Se deben comprar " + cantidadAlambre.toFixed(2) + " metros " ;

	alert(mensaje); 

	//console.log (Math.PI);

}

function Materiales () 
{
	var ancho;
	var largo;
	var areaTerreno;
	var cantidadCemento;
	var cantidadCal;
	var mensaje;

	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);

	largo = txtIdLargo.value;
	largo = parseInt(largo);

	areaTerreno = ancho * largo;

	cantidadCemento = areaTerreno * 2;
	cantidadCal = areaTerreno * 3;

	mensaje = " La cantidad de bolsa de cemento que se necesitan son " + cantidadCemento + " y " + cantidadCal + " de cal.";

	alert(mensaje);

}