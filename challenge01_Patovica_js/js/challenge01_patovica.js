// Preguntar la edad, si es manor y solo puede pasar ala fiesta con un tutor

let edad = parseInt(prompt('Ingrese su edad: '));
if (edad>=18){
    alert('Que comience la fiesta! 😎');
}else {
    let tutor = prompt('Tiene tutor').toLocaleLowerCase();
    if (tutor==='si'){
        alert('Bienvenido a la fiesta! 😁');
    }else{
        alert('Lo sentimos le pedimos que vuelva con un tutor. 😪');
    }
}
// console.log(tutor);