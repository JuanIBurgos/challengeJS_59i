// Inicio de los ejercicios del campus en el pdf de nombre ejerciciosdejs
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un
// alert que diga “un mensaje”
// alert("Un mensaje"); // Resolución

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que
// diga «Hello World» (document.write).
//document.write("Hello word"); //desarrollo del punto 02

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado
// de sumar 3 + 5.
//document.write("El resultado de sumar 3 + 2 es ",3+5); //Resolución del ejercicio 03

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un
// prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo: input: Coder Output: Hola Coder
// let nameUser = prompt('Ingrese su nombre'); // Pido el dato de ingreso 
// document.write(`Hola ${nameUser}`);// Imprimo en pantalla
// alert(`Hola ${nameUser}`); // Ubico la salida en un alert

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y
// escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// let number01=parseInt(prompt('Ingrese el primer valor: ')); // Pido los datos
// let number02=parseInt(prompt('Ingrese el segundo valor: '));
// document.write(`El resultado de sumar ${number01} mas ${number02} es ${number01+number02}`); // Entrego los resultado

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es elmayor.
// Ejemplo: input: 15 , 3 Output: El 15 es el número más grande.
// let number03=parseInt(prompt('Ingrese un valor: ')); // Pido los datos
// let number04=parseInt(prompt('Ingrese el segundo valor: '));
// if (number03>number04){
//     document.write(`El numero ${number03}  es mayor que ${number04}`); // Entrego los resultado
// }else if (number03 != number04) {
//     document.write(`El numero ${number04}  es mayor que ${number03}`); // Entrego los resultado
//     }else {
//         document.write(`Los números son iguales.`); // Entrego los resultado
//         }

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: input: 15 , 3, 9 Output: El 15 es el número más grande
// let number05 = parseInt(prompt('Ingrese el primer valor: '));
// let number06 = parseInt(prompt('Ingrese el segundo valor: '));
// let number07 = parseInt(prompt('Ingrese el tercer valor: '));
// let mayor;
// if (number05>number06 && number05>number07){
//     mayor=number05;
// }else if (number06>number05 && number06>number07){
//     mayor=number06;
//     }else{
//         mayor=number07;
//         }
// document.write(`El número ${mayor}`);

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: input: 10 Output: El 10 es divisible por 2. 
// Ejemplo: input: 15 Output: El 15 no es divisible por 2.
// let numberParImpar=parseInt(prompt('Ingrese un numero a evaluar: '));
// if (numberParImpar%2 == 0 ){
//     document.write(`El número ${numberParImpar} es par.`);
// }else{
//     document.write(`El número ${numberParImpar} es impar.`);
// }

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo: input: Hola mundo Output: oauo
// let cadena01=prompt('Ingrese una cadena: ').toLowerCase();
// for (i=0;i<cadena01.length;i++){
//     if (cadena01.charAt(i)=='a'|| cadena01.charAt(i)=='e' || cadena01.charAt(i)=='i' || cadena01.charAt(i)=='o' || cadena01.charAt(i)=='u' ){
//         console.log(`${cadena01.charAt(i)}`); // imprime en consola 
//         document.write(`${cadena01.charAt(i)}`); // imprime en pantalla
//     }
// }

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
// (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo:input: 20 Output: El 20 es divisible por 2.
// let numberDivisible = parseInt(prompt('Ingrese un numero: '));
// if (numberDivisible % 2 == 0){
//     console.log(`El número ${numberDivisible} es divisible por 2.`);
//     document.write(`El número ${numberDivisible} es divisible por 2.`);
// }else if (numberDivisible% 3 == 0){
//         console.log(`El número ${numberDivisible} es divisible por 3.`);
//         document.write(`El número ${numberDivisible} es divisible por 3.`);
//     }else if(numberDivisible%5 == 0){
//         console.log(`El número ${numberDivisible} es divisible por 5.`);
//         document.write(`El número ${numberDivisible} es divisible por 5.`);
//         } else if (numberDivisible%7==0){
//             console.log(`El número ${numberDivisible} es divisible por 7.`);
//             document.write(`El número ${numberDivisible} es divisible por 7.`);
//             }else {
//                 console.log(`El número ${numberDivisible} no es divisible por 2, 3, 5 ni por 7.`);
//                 }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
// que decir todos por los que es divisible)
// Ejemplo: input: 20 Output: El 20 es divisible por 2 y por 5.
// Ejemplo input: 210 Output: El 210 es divisible por 2, por 3,por 5 y por 7

let numberDivisible01 = parseInt(prompt('Ingrese un numero: '));
if (numberDivisible01%2!=0 && numberDivisible01%3!=0 && numberDivisible01%5!=0 && numberDivisible01%7!=0){
    console.log(`El número ${numberDivisible01} no es divisible por 2, 3, 5 ni por 7.`);
    document.write(`El número ${numberDivisible01} no es divisible por 2, 3, 5 ni por 7.`);
    }else if (numberDivisible01%2==0 && numberDivisible01%3==0 && numberDivisible01%5==0 && numberDivisible01%7==0){
            console.log(`El número ${numberDivisible01} es divisible por 2, por 3, por 5 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 2, por 3,por 5 y por 7.`);
            }else if (numberDivisible01%2==0 && numberDivisible01%3==0 && numberDivisible01%5==0 && numberDivisible01%7!=0){
                console.log(`El número ${numberDivisible01} es divisible por 2, por 3 y por 5.`);
                document.write(`El número ${numberDivisible01} es divisible por 2, por 3 y por 5.`);
            }else if (numberDivisible01%2==0 && numberDivisible01%3==0 && numberDivisible01%5!=0 && numberDivisible01%7==0){
                console.log(`El número ${numberDivisible01} es divisible por 2, por 3 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 2, por 3 y por 7.`);
        }else if (numberDivisible01%2==0 && numberDivisible01%3==0 && numberDivisible01%5!=0 && numberDivisible01%7!=0){
            console.log(`El número ${numberDivisible01} es divisible por 2 y por 3.`);
            document.write(`El número ${numberDivisible01} es divisible por 2 y por 3.`);
        }else if (numberDivisible01%2==0 && numberDivisible01%3!=0 && numberDivisible01%5==0 && numberDivisible01%7==0){
            console.log(`El número ${numberDivisible01} es divisible por 2, por 5 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 2, por 5 y por 7.`);
        }else if (numberDivisible01%2==0 && numberDivisible01%3!=0 && numberDivisible01%5==0 && numberDivisible01%7!=0){
            console.log(`El número ${numberDivisible01} es divisible por 2 y por 5.`);
            document.write(`El número ${numberDivisible01} es divisible por 2 y por 5.`);
        }else if (numberDivisible01%2==0 && numberDivisible01%3!=0 && numberDivisible01%5!=0 && numberDivisible01%7==0){
            console.log(`El número ${numberDivisible01} es divisible por 2 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 2 y por 7.`);
        }else if (numberDivisible01%2==0 && numberDivisible01%3!=0 && numberDivisible01%5!=0 && numberDivisible01%7!=0){
            console.log(`El número ${numberDivisible01} es divisible por 2.`);
            document.write(`El número ${numberDivisible01} es divisible por 2.`);
        }else if (numberDivisible01%2!=0 && numberDivisible01%3==0 && numberDivisible01%5==0 && numberDivisible01%7==0){
            console.log(`El número ${numberDivisible01} es divisible por 3, por 5 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 3, por 5 y por 7.`);
        }else if (numberDivisible01%2!=0 && numberDivisible01%3==0 && numberDivisible01%5==0 && numberDivisible01%7!=0){
            console.log(`El número ${numberDivisible01} es divisible por 3 y  por 5.`);
            document.write(`El número ${numberDivisible01} es divisible por 3 y por 5.`);
        }else if (numberDivisible01%2!=0 && numberDivisible01%3==0 && numberDivisible01%5!=0 && numberDivisible01%7==0){
            console.log(`El número ${numberDivisible01} es divisible por 3 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 3 y por 7.`);
        }else if (numberDivisible01%2!=0 && numberDivisible01%3==0 && numberDivisible01%5!=0 && numberDivisible01%7!=0){
            console.log(`El número ${numberDivisible01} es divisible por 3.`);
            document.write(`El número ${numberDivisible01} es divisible por 3.`);
        }else if (numberDivisible01%2!=0 && numberDivisible01%3!=0 && numberDivisible01%5==0 && numberDivisible01%7==0){
            console.log(`El número ${numberDivisible01} es divisible  por 5 y por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 5 y por 7.`);
        }else if (numberDivisible01%2!=0 && numberDivisible01%3!=0 && numberDivisible01%5==0 && numberDivisible01%7!=0){
            console.log(`El número ${numberDivisible01} es divisible por 5.`);
            document.write(`El número ${numberDivisible01} es divisible por 5.`);
        }else {
            console.log(`El número ${numberDivisible01} es divisible por 7.`);
            document.write(`El número ${numberDivisible01} es divisible por 7.`);
        }
    
