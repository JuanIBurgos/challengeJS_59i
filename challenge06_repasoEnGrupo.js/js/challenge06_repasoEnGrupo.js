// 1-Realiza un script que pida una cadena de texto y lo muestre poniendo el signo 
// – entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// Opción 01 - Realizado de manera larga
let stringUser =prompt('Ingrese un frase: ');
let result01='';
for (let i=0;i<stringUser.length;i++){
    if (i===stringUser.length-1){
        // console.log(`${stringUser[i]}`);
        result01=result01+stringUser[i];
        }else{
        // console.log(`${stringUser[i]}-`);
        result01=result01+`${stringUser[i]}-`;
        }
}
console.log(result01);
// Opción 02 - Realizo don metodos de JS (Menos lineas de código)
// lo realizo con la misma frase introducida
let result02 = stringUser.split('');
console.log(result02.join('-'));



// ‌2-Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
let result03 = stringUser.split('');
let result04 = result03.reverse();
document.write(result04);
console.log(result04);