// 4- Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let addSumar = 0;
let answer = confirm('Presione aceptar si desea ingresar un número');

while (answer==true){
    numberUser = Number(prompt('Ingrese un numero: '));
    isNotNumberUser = isNaN(numberUser);
    while(isNotNumberUser == true){
        alert('Puede ingresar un numero, por favor?')
        numberUser=prompt('Ingrese un numero: ');
        isNotNumberUser = isNaN(numberUser);
    }
    numberUser=parseInt(numberUser);
    addSumar = addSumar + numberUser;
    answer =confirm('Quiere ingresar otro número?');
}

console.log(`La suma de los numero ingresados es ${addSumar}.`);
document.write(`La suma de los numero ingresados es ${addSumar}.`);
