// APUNTES PROGRAMACIÓN

// Variables --> Es una porción de memoria donde podemos almacenar valores. (var)
var variable; // Siempre debe haber un ";" al final de la linea

// Los tipos de valores admitidos son: Números enteros, números con coma y texto.
// Para definir variables, debemos cargarlas con =
variable = 5;

// Se pueden crear y almacenar variables en una sola linea de código.
var variable2 = 7;




// Operadores Aritmeticos básicos
// + Suma
// - Resta
// * Multiplicación
// / División
// % Resto

// Las variables pueden combinarse con una expresión matemática.
var valor1;
var valor2;
var resultado;

valor1 = 3;
valor2 = 2.2;
resultado = (2*valor1 / 2) + 5;

// Además, dicho resultado puede imprimirse en consola.
console.log("El resultado es: " + resultado);
alert("El resultado es: " + resultado);


// Entrada de datos Prompt
// var respuesta = prompt("Mensaje","Texto ingresado por defecto")
var respuesta = prompt("Ingrese un número del 1 al 5:", "0");
console.log(respuesta);

// El Prompt solo registra caracteres, por lo que un número debemos pasarlo a númerico.
respuesta = parceInt(respuesta);

// Ejercicio 1
var variableEjercicio1 = 5;
console.log(variableEjercicio1);

// Ejercicio 2
// console.log("Hola Mundo) --> Falta el cierre de comillas.

// Ejercicio 3
var valor1Ejecicio3;
var valor2Ejercicio3;
var valorResultadoEjercicio3;

valor1Ejecicio3 = 33;
valor2Ejercicio3 = 77;
valorResultadoEjercicio3 = valor1Ejecicio3 + valor2Ejercicio3;
console.log(valorResultadoEjercicio3);

// Ejercicio 4
var a;
var b;
var c;
var d;
var e;
var promedio;

a = 8;
b = 3.5;
c = 10;
d = 6.3;
e = 8.1;

promedio = (a+b+c+d+e)/5;
console.log (promedio);


// Operaciones lógicas y control de flujo

// Boolean, solo puede contener dos valores --> True o False
// Podemos utilizar uniones (Op "OR") ||, e intersecciones (Op "AND") &&.
// Tambien existen operadores relacionales cómo <, >, <=, >=, ==, !=.

var a;
var b;
var resultado;

a = true;
b = false;

resultado = a && b;
console.log(resultado);


// Sentencias de control de flujo.

// Sentencia if-else
var condicion = 8;

if(condicion == 5) {
    console.log ('Esto es 5');
}else {
    console.log('Esto es 8');
}

// If- else if
var condicion = 10;

if(condicion == 5) {
    console.log ('Esto es 5');
}else if(condicion == 8) {
    console.log('Esto es 8');
}else {
    console.log('Esto es falso');
};

// Switch
var dia;
dia = 2;

switch(dia)
{
    case 1 : {
        console.log("Domingo");
        break;
    }
    case 2 : {
        console.log("Lunes");
        break;
    }
    case 3 : {
        console.log("Martes");
        break;
    }
};

// Ejercicios

// Ejercicio 1
var nota1;
var nota2;
var resultado;

nota1 = 5;
nota2 = 3;

resultado = nota1 > nota2;
console.log(resultado);

// Ejercicio 2
var nota1;
var nota2;

nota1 = 10;
nota2 = 5.3;

if(nota1 < nota2) {
    console.log('nota1 es menor');
} else if(nota1 > nota2) {
    console.log('nota1 es mayor');
} else {
    console.log('Son notas iguales');
};

// Ejercicio 3
var calificación;
calificación = prompt('Definí las calificaciones del 0 al 4:', "0");
calificación = parceInt(calificación);

console.log('La calificación de la pelicula es: '+ calificacion);


// Loops

// While
// Ejecuta en forma repetida un bloque de lineas.

var contador;
contador = 0;

// ERROR DEL APUNTE, SE COLOCA <=10 o <11, SINO EL CONTADOR VA A LLEGAR HASTA 9.
while(contador<=10) {
    console.log(contador);
    contador = contador+1;
};

// respuesta="si";

//While(respuesta=="si")

// For
// Se define por tener una "Inicialización, comparación y modificación"
var i;
for(i=0; i >= 10; i=i+1) {
    console.log(i);
}

// Break
// Rompe el bucle.

// Ejercicios

// Ejercicio 1
var regresiva;
regresiva = 59;

while (regresiva >= 0) {
    console.log(regresiva);
    regresiva = regresiva-1;
};

// Ejercicio 2
var pares;
for (pares = 0; pares<101; pares= pares+1) {
    if(pares%2 == 0) {
        console.log(pares);
        pares = pares+1;
    } else {
        pares = pares+1
    };
};

// Ejercicio 3
var numero;
for (numero=100 ; numero>0 ; numero=numero+1) {
        console.log("numero:"+numero)
    }

// El error se encuentra en que el número no desciende, debajo del console.log
// se debe agregar numero = numero-1;
// Ademas hay un error del apunte, debe incluir 0 pero no lo incluye, para eso
// debemos colocar numero > -1 o numero >= 0.

// Ejercicio 4
var numero;
for (numero=0; numero < 101; numero=numero+1) {
    if(numero%3 == 0) {
        console.log(numero+" "+"es divisible por 3");
    } else {
        console.log(nummero+" "+"no es divisible por 3");
    }
}

// Ejercicio 5
// Programa 1
var numero;
numero = 5;
while (numero > 0) { //Mientras que número sea mayor a 0, se realiza la funcón. Corta en 1
    console.log("numero:"+numero);
    numero--; //Indicar esto es como colocar "numero = numero-1"
}

// Programa 2
var numero;
numero = 5;
while (true) { //While siempre va a ser true, por lo que SIEMPRE va a correr el loop
    console.log("numero:"+numero);
    numero--; //Indicar esto es como colocar "numero = numero-1"
    if(numero < 0) // Sí número es menor a 0, procede a cortar la ejecución. Va a cortar en 0
    {
        break;
    }
}

// La diferencia es que el programa uno es un contador hacía arriba, y el otro
// es un contador hacía abajo. De todas formas, las dos funcionan.


// Funciones
// Potenciar números
var numero = 5;
var cuadrado = numero*numero;
var cubo = numero*numero*numero;

console.log('El cuadrado de 5 es: '+cuadrado);
console.log('El cubo de 5 es: '+cubo);

// Como preparar una funcion
function numeroAlCuadrado (numero) {
    var calculo;
    calculo = numero*numero;

    return calculo;
}
// Para llamar a la función solo hay que colocarla de la siguiente manera: (Se coloca el
// var resultado; para que el resultado se iguale con la variable.
// De esta forma es posible imprimir y hasta realizar un mejor manejo de variables.
var numero;
var resultado;
numero = 3;
resultado = numeroAlCuadrado(numero);
console.log(resultado);

// Todas estas funciones las podemos dejar armadas para incluirlas en bucles. (Que venimos
// utilizando para contadores. Ejemplo:

// Define el cuadrado de todos los números del 1 al 5;
var ejemplo = 1;
var resultado;
while(ejemplo > 6) { //Se coloca 6 para que corte en 5
    resultado = numeroAlCuadrado(ejemplo);
    console.log(resultado);
    ejemplo++ //Esto es lo mismo que colocar "ejemplo = ejemplo + 1"
};

// Operadores Incremento y decremento
var incremento;
incremento = 5;
incremento = 5 + 1;
// Es igual a...
var incremento;
incremento = 5;
incremento++

var decremento = 5;
decremento = 5;
decremento = 5-1;
// Es igual a...
var decremento = 5;
decremento = 5;
decremento--

// Operadores
// += | i += a | i = i+a
// -= | i -= a | i = i-a
// *= | i *= a | i = i*a
// /= | i /= a | i = i/a
// %= | i %= a | i = i%a

// Ejercicios

// Ejercicio 1
var radio;
var perimetroCalculado;
function calcularPerimetro (radio) {
    var perimetro;
    perimetro = 2*3.14*radio;
    return perimetro;
}

radio = 2;
perimetroCalculado = calcularPerimetro(radio);
console.log(perimetroCalculado);

// Ejercicio 2
var valor1;
var valor2;
var valor3;
var mayor;

function calcularMayor(valor1, valor2, valor3) {
    var resultado;
    if(valor1 > valor2) { // Analiza valor1
        if(valor1 > valor3) {
            resulado = valor1;
        }
    } else if (valor2 > valor1) { // Analiza valor2
        if(valor2 > valor3) {
            resulado = valor2;
        }
    } else if (valor3 > valor1) { // Analiza valor3
        if (valor3 > valor2) {
            resulado = valor3;
        }
    } else { // Detecta que ningun valor es el más alto, se puede programar para que detecte cual
        // es el mayor número ingresado.
        resultado = null;
    };
    return resultado;
};

valor1 = prompt('Ingrese primer número:', ''); // Se pide valor1
valor1 = parceInt(valor1); // Se pasa a valor numérico

valor2 = prompt('Ingrese segundo número:', ''); // Se pide valor2
valor2 = parceInt(valor2); // Se pasa a valor numérico

valor3 = prompt('Ingrese segundo número:', ''); // Se pide valor3
valor3 = parceInt(valor3); // Se pasa a valor numérico

mayor = calcularMayor(valor1, valor2, valor3);
console.log(mayor);

// Ejercicio 3
var opcion;
var base;
var altura;
var area;

opcion = prompt('Sí queres calcular el aréa de un triangulo escribí Y, para cuadrado X:', '');
function calculadorArea (opcion, base, altura) {
    var resultado;
    var opcionElegida = opcion;
    var flagTriangulo;
    while(opcion != "Y" || opcion != "y" || opcion != "N" || opcion != "n") { // Detecta sí se coloca otra letra que no sea la que se indicó. (Mayusculas o minusculas).
        opcionElegida = prompt('Sí queres calcular el aréa de un triangulo escribí Y, para cuadrado X:', '');
        if (opcionElegida == "Y" || opcionElegida == "y" || opcionElegida == "N" || opcionElegida == "n") {
            break;
        }
    }

    flagTriangulo = opcionElegida == "Y" || opcionElegida == "y";

    if(flagTriangulo == true) {
        resultado = "El area del triagulo es:" + (base*altura)/2;
    }else {
        resultado = "El area del cuadrado es:" + base*altura;
    };

    return resultado;
};

area = calculadorArea(opcion, base, altura);
console.log(area);


// Arrays de números. Suma de horas semanales. VER PDF: Página 35
// Un array está definido entre [].
var array = [8,7,6,5,8,2,3];
var horasSemanales = 0; // Debe ser un contador que inicie en 0 para calcular las horas totales.
var i; // Variable que recorre el array, debe ser 0 ya que es el número de la posición inicial.

// Calculo de Horas semanales simplificado, evita crear 7 variables (Correspondiente al número de días)
for(i=0; i<7; i++) {
    horasSemanales += array[i];
}
console.log(horasSemanales);

// Si imprimimos una posición donde no exista ninguna posición cargada nos dará undefined. Ejemplo:
console.log(array[100]); // Esto dará undefined


// Ejercicios

// Ejercicio 1
var valor;
function acumuladorNumeros (valor) {
    var array;
    var i = 0;
    while(true) {
        array[i] = valor;
        valor = prompt('Ingresa otro número:', '');
        valor = parceInt(valor); //ES IMPORTANTE PASAR EL NUMERO A NUMÉRICO.
        if(valor == -1) {
            break;
        }
        i++
    };

    // Imprime números
    var e;
    for(e=0; e <= i; e++) {
        console.log(array[e]);
    };
}

valor = prompt('Ingresá un número: ','');
valor = parceInt(valor);
acumuladorNumeros(valor);

// Ejercicio 2
var valor;
function acumuladorNumerosPromedio (valor) {
    var array;
    var i = 0;
    while(true) {
        array[i] = valor;
        valor = prompt('Ingresa otro número:', '');
        valor = parceInt(valor); //ES IMPORTANTE PASAR EL NUMERO A NUMÉRICO.
        if(valor == -1) {
            break;
        };
        i++
    };

    var e;
    var promedio = 0;
    for(e=0; e <= array.leght-1; e++) {
        promedio += array[e];
    };
    promedio /= array.leght-1;

    return promedio;
};

valor = prompt('Ingresá un número: ','');
valor = parceInt(valor);
acumuladorNumerosPromedio(valor);

// Ejercicio 3
var numero;
var orden;

function ordenarMayor (numero) {
    var valor = numero;
    var array;

    for (i=0; i <= 4; i++) {
        array[i] = valor;
        valor = prompt('Ingrese otro número', '');
        valor = parceInt(valor);
    };

    array = array.sort((a, b) => b - a);
    console.log(array);
};

numero = prompt('Ingrese un número:', '');
numero = parceInt(numero);
ordenarMayor(numero);

// Ejercicio 4
var producto;
var valor;

function ordenarPrecio(producto, valor) {
    var prod = producto;
    var price = valor;
    var arrayProd;
    var arrayPrecio;

    for(i=0; i <= 4; i++) {
        arrayProd[i] = prod;
        arrayPrecio[i] = price;
        i++
        prod = prompt('Ingrese el nombre de otro producto:', '');
        price = prompt('Ingrese su valor:', '');
        price = parceInt(price);
    };

    if(arrayPrecio[0] < arrayPrecio[1]) {
        if(arrayPrecio[0] < arrayPrecio[2]) {
            if(arrayPrecio[0] < arrayPrecio[3]) {
                if(arrayPrecio[0] < arrayPrecio[4]) {
                    console.log(arrayProd[0] + " " + '$'+arrayPrecio[0]+ " *");
                    console.log(arrayProd[1] + " " + '$'+arrayPrecio[1]);
                    console.log(arrayProd[2] + " " + '$'+arrayPrecio[2]);
                    console.log(arrayProd[3] + " " + '$'+arrayPrecio[3]);
                    console.log(arrayProd[4] + " " + '$'+arrayPrecio[4]);
                    return;
                }
            }
        }
    }else if (arrayPrecio[1] < arrayPrecio[0]) {
        if(arrayPrecio[1] < arrayPrecio[2]) {
            if(arrayPrecio[1] < arrayPrecio[3]) {
                if(arrayPrecio[1] < arrayPrecio[4]) {
                    console.log(arrayProd[0] + " " + '$'+arrayPrecio[0]);
                    console.log(arrayProd[1] + " " + '$'+arrayPrecio[1] + " *");
                    console.log(arrayProd[2] + " " + '$'+arrayPrecio[2]);
                    console.log(arrayProd[3] + " " + '$'+arrayPrecio[3]);
                    console.log(arrayProd[4] + " " + '$'+arrayPrecio[4]);
                    return;
                }
            }
        }
    } else if (arrayPrecio[2] < arrayPrecio [0]) {
        if(arrayPrecio[2] < arrayPrecio[1]) {
            if(arrayPrecio[2] < arrayPrecio[3]) {
                if(arrayPrecio[2] < arrayPrecio[4]) {
                    console.log(arrayProd[0] + " " + '$'+arrayPrecio[0]);
                    console.log(arrayProd[1] + " " + '$'+arrayPrecio[1]);
                    console.log(arrayProd[2] + " " + '$'+arrayPrecio[2] + " *");
                    console.log(arrayProd[3] + " " + '$'+arrayPrecio[3]);
                    console.log(arrayProd[4] + " " + '$'+arrayPrecio[4]);
                    return;
                }
            }
        }
    } else if (arrayPrecio[3] < arrayPrecio[0]) {
        if(arrayPrecio[3] < arrayPrecio[1]) {
            if(arrayPrecio[3] < arrayPrecio[2]) {
                if(arrayPrecio[3] < arrayPrecio[4]) {
                    console.log(arrayProd[0] + " " + '$'+arrayPrecio[0]);
                    console.log(arrayProd[1] + " " + '$'+arrayPrecio[1]);
                    console.log(arrayProd[2] + " " + '$'+arrayPrecio[2]);
                    console.log(arrayProd[3] + " " + '$'+arrayPrecio[3] + " *");
                    console.log(arrayProd[4] + " " + '$'+arrayPrecio[4]);
                    return;
                }
            }
        }
    } else if (arrayPrecio[4] < arrayPrecio[0]) {
        if(arrayPrecio[4] < arrayPrecio[1]) {
            if(arrayPrecio[4] < arrayPrecio[2]) {
                if(arrayPrecio[4] < arrayPrecio[3]) {
                    console.log(arrayProd[0] + " " + '$'+arrayPrecio[0]);
                    console.log(arrayProd[1] + " " + '$'+arrayPrecio[1]);
                    console.log(arrayProd[2] + " " + '$'+arrayPrecio[2]);
                    console.log(arrayProd[3] + " " + '$'+arrayPrecio[3]);
                    console.log(arrayProd[4] + " " + '$'+arrayPrecio[4] + " *");
                    return;
                }
            }
        }
    } else {
        console.log('No hay un menor');
        return;
    }

}

producto = prompt('Ingrese el nombre de su producto:', '');
valor = prompt('Ingrese el valor del producto:', '');
valor = parceInt(valor);
ordenarPrecio(producto, valor);

// Ejercicio 5
function reversed() {
    var array = [15, 24, 33];
    var reversedArray = array.reverse();
    console.log(reversedArray);
}
reversed();