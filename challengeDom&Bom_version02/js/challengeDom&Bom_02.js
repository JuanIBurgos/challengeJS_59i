// Crear una web con bootstrap y JS, que contenga un botón comenzar el juego, 
// en ese momento se crea un numero aleotorio que el usuario deberá adivinar, 
// la interfaz del usuario debe tener ademas un input para ingresar un número 
// y un botón enviar, al presionar el botón enviar mostrar en alert si el usuario adivino
// o no el número mágico, si no lo adivino indicarle con un alert si el número que ingreso
// es mayor o menor al número magico
// Cuando el usuario adivine el número mostrar un mensaje indicando al usuario
// adivino el número.

var numberMagic;
function comenzarJuego(){
  
    numberMagic = parseInt(Math.random()*100);
    const newInput = document.createElement('div')

    newInput.innerHTML = `
    <input type="number" class="mx-2 my-4" id="idNumberUser"> 
    <button class="btn btn-danger d-block" onclick="comprobarValor()">Enviar</button>`;

    const containerResultado= document.querySelector('.contenedor-resultado');
    containerResultado.appendChild(newInput);

}

function comprobarValor(){ 
    event.preventDefault();   
    let elementNumberUser= document.getElementById('idNumberUser');
        const numberUser=elementNumberUser.value; 
        console.log(numberMagic);
        if (numberUser==numberMagic){
            alert('Felicidades usted ha adivinado el número 👌')
            //console.log('Encontrado');
            }else if (numberUser>numberMagic){
                alert('Ingrese un número menor 👇')
                //console.log('Ingrese un número menor')
                }else{
                    alert('Ingrese un número mayor 👆')
                //console.log('Ingrese un número mayor al ingresado')
            }
    document.querySelector('form').reset();
}
