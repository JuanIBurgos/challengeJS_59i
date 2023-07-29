// 1) Escribe un programa que imprima "¡Hola, mundo!" en la consola.
console.log('¡Hola, mundo!');

// 2) Crea un programa que solicite al usuario su nombre y  apellido 
// en dos variables y luego lo salude por su completo.
let nameUser = prompt('Ingrese su nombre: ');
let lastNameUser = prompt('Ingrese su apellido: ');
alert('Buenos Días '+nameUser+' '+lastNameUser);
console.log('Buenos Días '+nameUser+' '+lastNameUser);

// 3) Escribe un programa que calcule la suma de dos números ingresados
// por el usuario y muestre el resultado.
let number01 = parseInt(prompt('Ingrese primer valor: '));
let number02 = parseInt(prompt('Ingrese segundo valor: '));
alert(`La suma de los numeros ${number01} mas ${number02} es ${number01+number02}`);
console.log(`La suma de los numeros ${number01} mas ${number02} es ${number01+number02}`);



