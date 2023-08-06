// Una persona esta por comprar un inmueble, 
// si llevo los anteojos podrá leer en la letra pequeña se avisa
// que el inmueble está construido sobre el cementerio indio embrujado.

let lentes= prompt('Trae sus lentes?' ).toLowerCase();
// console.log(lentes)
switch(lentes){
    case 'si':
        console.log('El inmueble está construido sobre el cementerio indio embrujado.');
        document.write("El inmueble está construido sobre el cementerio indio embrujado.");
        break;
    case 'no':
        console.log('El que no vio, luego se arrepintio.');
        document.write("El que no vio, luego se arrepintio.");
        break;
    default:
        console.log('Ingreso una respuesta no válida.');
        document.write("Ingreso una respuesta no válida.");
        break;
}

