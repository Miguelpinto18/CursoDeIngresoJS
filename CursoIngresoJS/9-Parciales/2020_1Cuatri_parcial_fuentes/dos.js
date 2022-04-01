/* Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar()

var tipo;
var precio;
var cantidad;
var marca;
var fabricante;
var acumuladorBarbijo = 0;
var acumuladorAlcohol = 0;
var acumuladorJabon = 0;
var contadorBarbijo = 0;
var contadorAlcohol = 0;
var contadorJabon = 0;
var precioAlcoholBarato;
var cantidadAlcoholBarato;
var fabricanteAlcoholBarato;
var promedioCompra;
var mayorTipo;
var flagAlcohol = 0;
var mensajeAlcohol = "No se compraron alcoholes";
var mensajeb;
var mensajeJabon;


for(var i=0; i < 5; i++) 
{
	tipo = prompt('Ingrese tipo "barbijo" , "jabon" o "alcohol": ');
	while(tipo != "barbijo" && tipo !=  "jabon" && tipo != "alcohol") {
	   tipo = prompt ('Tipo invalido. Ingrese tipo "barbijo" , "jabon" o "alcohol": ');
    }

    precio = parseFloat(prompt("Ingrese precio $(100 - 300):"));
	while(precio < 100 || precio > 300 || isNaN(precio)) {
        precio = parseFloat(prompt("Error. Ingrese precio $(100 - 300):"));

	}

} 

cantidad = parseFloat(prompt("Ingrese cantidad max 1000:"));
	while(!(cantidad > 0 && cantidad <= 1000)) {
        cnatidad = parseFloat(prompt("Error. Ingrese cantidad max 1000:"));
}

marca = prompt("Ingrese marca: ");
fabricante = prompt("Ingrse fabricante: ");

switch(tipo) {
	case "alcohol":
	    acumuladorAlcohol += cantidad; 
		contadorAlcohol++; 
		
		if(flagAlcohol == 0 || precioAlcoholBarato > precio) {
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad;
			fabricanteAlcoholBarato = fabricante;
			flagAlcohol = 1;
		}

	    break;
	case "barbijo":
	    acumuladorBarbijo += cantidad;
		contadorBarbijo++;
	    break;
	case "jabon":
        acumuladorJabon += cantidad;
		contadorJabon++;
  	    break; 	   	  
}
	 
if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
	// acumuladorAlcohol sea el mayor
	mayorTipo = "alcohol";
    precioCompra = acumuladorAlcohol / contadorAlcohol;
}
else if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo >= acumuladorAlcohol) {
	// acumuladorBarbijo sea el mayor

	mayorTipo = "barbijo";
	promedioCompra = acumuladorBarbijo / contadorBarbijo;
}    
else {
	// acumuladorJabon sea el mayor 
	mayorTipo = "jabon";
    promedioCompra = acumuladorJabon / contadorJabon
}

if(flagAlcohol != 0) {
	mensajeAlcohol = "Fabricante alcohol barato" + fabricanteAlcoholBarato +
	"/nCantidad: " +  cantidadAlcoholBarato + 
	"/nPrecio: " + precioAlcoholBarato;

}

mensajeb = "B- Tipo con mas unidades: " + mayorTipo + " Promedio: " + promedioCompra;
mensajeJabon = "C- Unidades de jabon: " + acumuladorJabon;

alert(mensajeAlcohol + "/n" + mensajeb + "/n" + mensajeJabon);