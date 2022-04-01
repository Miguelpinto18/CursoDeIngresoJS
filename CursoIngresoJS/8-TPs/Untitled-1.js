/* Ejercicio 1 (Podes usar el ejercicio E/S 01 del curso de ingreso)

Se piden tres nombre de producto, y los precios de cada producto ingresado, sacar el precio bruto
(la suma de los tres sin impuestos), el promedio de los precios y el precio final total más iva(21%), 
pedir un porcentaje de descuento y aplicarlo al precio final , mostrar todos los datos calculados e 
ingresados ​​por alerta. (solo una alerta en el código). Los datos se piden por prompt. */

 
let nombreUno;
let nombreDos;
let NombreTres;
let precioUno;
let precioDos;
let precioTres;
let precioBruto
let promedioDePrecios;
let iva;
let precioFinalIva 
let ivaCalculado
let porcentajeDeDescunto;
let descuentoCalculado;
let precioFinalIvaConDescuento;
let mensaje; 



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

porcentajeDeDescunto = prompt("indique el % de descuento que desea aplica al precio"); 

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

 





