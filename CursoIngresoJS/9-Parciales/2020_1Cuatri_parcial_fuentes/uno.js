//Parcial 2020 Ejercicio 1
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


300 - 300*10/100
Promedio 
1+2+3+4+5
15 / 5
3
promedio = acumulador / contador   

var nombre;

nombre.toLowerCase(Miguel)
	

	
	
	

	 


function mostrar()

    // DECLARACION DE VARIABLES
{
	var i;
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var minimoAlcohol;
	var cantidadMinimoAlcohol;
	var fabricanteMinimoAlcohol;
	var acumuladorBarbijos;
	var acumuladorJabones;
	var acumuladorAlcohol;
	var promedioCantidad;
	var contadorBarbijo;
	var contadorAlcohol;
	var contadorJabon;
	var tipoMaximo;

	acumuladorAlcohol = 0;
	acumuladorJabones = 0;
	acumuladorBarbijos = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	
	// TENGO QUE GENERAR UN BUCLE QUE SE GENERA 5 VUELTAS (Tipo, Precio, Cantidad, Marca, Fabricante) 
	// (UTILIZO UN FOR por que conozco la cantidad de repeticiones, en este caso son 5 repeticiones).

	for(i=0; i<5; i++)
	{
		
		tipo = prompt("Ingrese el " + (i+1) + "° tipo de producto (barbijo, jabon o alcohol):");
		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol")
		{
			tipo = prompt("Por favor, reingrese el tipo de producto (barbijo, jabon o alcohol):");
		}
		
		precio = prompt("Ingrese el precio del producto (entre 100 y 300):");
		precio = parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio = prompt("Por favor, reingrese el precio del producto (entre 100 y 300):");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades):");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(cantidadUnidades<1 || cantidadUnidades>1000)
		{
			cantidadUnidades = prompt("Por favor, reingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades):");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca del producto:");
		fabricante = prompt("Ingrese el fabricante del producto:");
		
		// A- TENGO QUE RECONOCER SI EL PRODUCTO ES ALCOHOL Y RECORDAR EL PRECIO LA CANTIDAD Y EL FABRICANTE DEL DE MENOR PRECIO
		// B- TENGO QUE ACUMULAR LAS CANTIDAD DE UNIDADES DE CADA TIPO Y LA CANTIDAD DE TIPO DE PORDUCTO PARA SACAR EL PROMEDIO DE COMPRAR DEL ACUMULADOR MAYOR

		switch(tipo)
		{
			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol++;
				if(contadorAlcohol==1 || precio<minimoAlcohol)
				{
					minimoAlcohol = precio;
					cantidadMinimoAlcohol = cantidadUnidades;
					fabricanteMinimoAlcohol = fabricante;
				}
			break;
			case "barbijo":
				acumuladorBarbijos = acumuladorBarbijos + cantidadUnidades;
				contadorBarbijo++;
			break;
			default:
				acumuladorJabones = acumuladorJabones + cantidadUnidades;
				contadorJabon++;
			break;
		}

	}
	
	// C- TENGO QUE ACUMULAR LA CANTIDAD DE JABONES 

	if(acumuladorAlcohol>acumuladorBarbijos && acumuladorAlcohol>acumuladorJabones)
	{
		promedioCantidad = acumuladorAlcohol / contadorAlcohol;
		tipoMaximo = "alcohol";
	}
	else
	{
		if(acumuladorJabones>acumuladorBarbijos)
		{
			promedioCantidad = acumuladorJabones / contadorJabon;
			tipoMaximo = "jabon";
		}
		else
		{
			promedioCantidad = acumuladorBarbijos / contadorBarbijo;
			tipoMaximo = "barbijo";
		}
	}

	document.write("La cantidad de unidades del alcohol más barato es " + cantidadMinimoAlcohol + " y el fabricante es " + fabricanteMinimoAlcohol + "<br>");
	document.write("El tipo de producto con más cantidades es " + tipoMaximo + " y su promedio es " + promedioCantidad + "<br>");
	document.write("Hay " + acumuladorJabones + " jabones en total");


}

