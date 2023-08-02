// En este archivo se encontrar realizado los ejercicios correspondiente al archivo
// llamado EjerciciosJavascript-parte01, correspondiente a bucles y estructuras if.

// 1) Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
// mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
// let age=parseInt(prompt('Ingrese su edad: '));
// if (age<100 && age>0){
//     if (age>18){
//         alert('Bienvenido, circule con precaución. 😀🚗🚙🚌🚐 ');
//     }else{
//         alert('Disculpe pero en este momento usted no cumple con la edad requerida para manejar. 🚧🚨');
//     }
// }else{
//     alert('El dato ingresado no es correcto. 😐')
// }

// 2- Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
// la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
//
// let nota=0;
// do{
// nota=parseFloat(prompt('Ingrese una nota: '));
// if (nota>=0 && nota<3){
//      alert('Muy deficiente 🙄');
//  } else if (nota>=3 && nota<5){
//      alert('Insuficiente 😮');
//  }else if(nota>=5 && nota<=7){
//      alert('Suficiente 😛');
//  }else if(nota==7 && nota<8){
//      alert('Bien 😉');
//  }else if(nota>=8 && nota<10){
//      alert('Notable 😊');
//  }else if (nota==10){
//      alert('Sobresaliente');
//  }else{
//     console.log('número erróneo”');// muestro este mensaje en la consola
//      alert('Introduce un número válido.');
//  }
// }while(nota<0 || nota>10);

// 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
// salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
// (para consulta)
// let cadena='';
// do{
//      aux=prompt('Ingrese una cadena: ');
//      cadena=cadena+aux;
//  }while(confirm())
// document.write(cadena);
// POSTA
// let cadena01='';
// while(confirm(aux=prompt('Ingrese una cadena:')))
// {
//    cadena01=cadena01+aux;
// }
// document.write(cadena01);

// let cadena01='';
// do{
//    aux=prompt('Ingrese una cadena: ');
//    cadena01=cadena01+aux;
//    }while(confirm(cadena01));

//    document.write(cadena01);


