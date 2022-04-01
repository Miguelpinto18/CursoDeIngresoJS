/* Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó. */
/*
function CalcularPrecio () 
{ 
	var cantidadLamparas;
    var marcaLamparas;
    var precioUnidad;
    var descuento;
    var valorTotal;
	var impuestos;

    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = document.getElementById('Marca').value;
    precioUnidad = cantidadLamparas * 35;
    descuento = 0;

    if(cantidadLamparas > 5)
    {
        descuento = precioUnidad * 0.5;
    }
    else
        /*B.    Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
    y si es de otra marca el descuento es del 30%.*/
    /*{
        if(cantidadLamparas == 5)
        {           
            if(marcaLamparas == "ArgentinaLuz")
            {
                descuento = precioUnidad * 0.4;
            }
            else
            {
                descuento = precioUnidad * 0.3;
            }
        }
        else
        { 
            if (cantidadLamparas == 4) 
            {
                if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas" ) 
                {
                    descuento = precioUnidad * 0.25;
                }
                else 
                {
                    descuento = precioUnidad * 0.20;
                }
            }
            else
            {
                if (cantidadLamparas == 3)
                {
                    if (marcaLamparas == "ArgentinaLuz") 
                    {
                        descuento = precioUnidad * 0.15;
                    }
                    else
                    {
                        if(marcaLamparas == "FelipeLamparas")
                        {
                         descuento = precioUnidad * 0.10;   
                        }
                        else
                        {
                         descuento = precioUnidad * 0.05;   
                        }
                        
                    }
                }
            }

        }
        

    }

	/* E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos
	 en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el 
	 impuesto que se pagó. */

	
/*

    valorTotal = precioUnidad - descuento;

	if(valorTotal > 120)
	{
		impuestos = valorTotal * 0.10;
		valorTotal = valorTotal + impuestos;

		//valorTotal = valorTotal * 1.10;

		alert("IIBB Usted pago " + impuestos);

	}

    document.getElementById('txtIdprecioDescuento').value = valorTotal; */




	



	    

//} 


 
	
	
	
	
	
	
	/*
	var cantidadLamparas;
	var precioLamparas;
	var precioDescuento;

	cantidadLamparas = txtIdCantidadLamparas.value;
	cantidadLamparas = parseInt(cantidadLamparas);

	precioLamparas = 35;

	if(cantidadLamparas > 5) 
	{
		
		precioDescuento = cantidadLamparas * 35 * 0.50;
		
		txtIdprecioDescuento.value = "$" + precioDescuento;


	} */
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* Ejercicio 1 (Podes usar el ejercicio E/S 01 del curso de ingreso)

Se piden tres nombre de producto, y los precios de cada producto ingresado, sacar el precio bruto
(la suma de los tres sin impuestos), el promedio de los precios y el precio final total más iva(21%), 
pedir un porcentaje de descuento y aplicarlo al precio final , mostrar todos los datos calculados e 
ingresados ​​por alerta. (solo una alerta en el código). Los datos se piden por prompt. */

/*
var nombreUno;
var nombreDos;
var NombreTres;
var precioUno;
var precioDos;
var precioTres;
var precioBruto
var promedioDePrecios;
var iva;
var precioFinalIva 
var ivaCalculado
var porcentajeDeDescunto;
var descuentoCalculado;
var precioFinalIvaConDescuento;
var mensaje;



nombreUno = prompt("ingresa el nombre del primer producto");
precioUno = prompt("ingresa el precio de " + nombreUno);
precioUno = parseInt(precioUno);


nombreDos = prompt("ingresa el nombre del segundo producto");
precioDos = prompt("ingresa el precio de " + nombreDos);
precioDos = parseInt(precioDos);

NombreTres = prompt("ingresa el nombre del tercer producto");
precioTres = prompt("ingresa el precio " + NombreTres);
precioTres = parseInt(precioTres);

precioBruto = precioUno + precioDos + precioTres;

promedioDePrecios = precioBruto / 3;

iva = 21;

ivaCalculado = (precioBruto/100)*iva;

precioFinalIva = precioBruto + ivaCalculado;

porcentajeDeDescunto = prompt("indique el % de descuento que desea aplicar al precio"); 

porcentajeDeDescunto = parseInt(porcentajeDeDescunto) ////dato que ingresa el usuario y lo pasamos a entero 

descuentoCalculado = (precioFinalIva/100)*porcentajeDeDescunto;

precioFinalIvaConDescuento = precioFinalIva - descuentoCalculado;


mensaje = "los productos con su precio son: ";
mensaje = mensaje + nombreUno + " $" + precioUno + " ,";
mensaje = mensaje + nombreDos+ " $" + precioUno; + " ,";
mensaje = mensaje + NombreTres+" $" + precioUno; + " ,";
mensaje	= mensaje + "precio bruto: $" + precioBruto + " ,";
mensaje = mensaje + "promedio: $ " + promedioDePrecios + " ,";
mensaje = mensaje + "el precio final mas  iva: $" + precioFinalIva + " ,";
mensaje = mensaje + "el precio mas final con el " + porcentajeDeDescunto + "% de descuento " + precioFinalIvaConDescuento;




alert(mensaje);

}
*/





/*
Enunciado: TP4
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
Curso de ingreso UTN FRA */




    function CalcularPrecio () 
    {
       var cantidadLamparas; //txtIdCantidad
       var precioLamparas; //35
       var resultado; //txtIdprecioConDescuento
       var marca; //Marca
       var aumento;
       var descuento;
       var precioFinal;
       var precioBruto;
       var rebaja;
       var iIBB;
    
       cantidadLamparas = document.getElementById('txtIdCantidad').value;
       cantidadLamparas = parseInt(cantidadLamparas);
       marca = document.getElementById('Marca').value
       precioLamparas = 35;
       aumento = 0;
    
       switch(cantidadLamparas){
          case 1:
          case 2:
             descuento = 0;
             break;
          case 3:
             switch(marca){
                case "ArgentinaLuz":
                   descuento = 15;
                   break;
                case "FelipeLamparas":
                   descuento = 10;
                   break;
                default:
                   descuento = 5;
                   break;   
             }
             break;
          case 4:
             switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                   descuento = 25;
                   break;
                default:
                   descuento = 20;
                   break;   
             }
    
             break;
          case 5:
             switch(marca){
                case "ArgentinaLuz":
                   descuento = 40;
                   break;
                default:
                   descuento = 30;
                   break;
             }
             break;
          default:
             descuento = 50;
             break;
    
    
       }
    
    precioBruto = precioLamparas * cantidadLamparas;
    rebaja = precioBruto / 100 * descuento;
    precioFinal = precioBruto - rebaja;
    
    if(precioFinal > 120){
       iIBB = precioFinal / 100 * 10;
       precioFinal = iIBB + precioFinal;
       alert("Usted pago $" + iIBB + " de IIBB.");
    }
    
    document.getElementById('txtIdprecioDescuento').value = precioFinal;
}