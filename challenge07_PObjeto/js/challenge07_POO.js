// 1 - Crear un arreglo de objeto que contenga datos de películas como: 
// títulos, género, anio, sinopsis
class Pelicula{
    constructor(titulo,genero,anio,sinopsis){
        this.titulo = titulo;
        this.genero =  genero;
        this.anio = anio;
        this.sinopsis = sinopsis;
    }
    // metodo para mostrar cada pelicula
    mostrarPelicula (){
        console.log(`La pelicula ${this.titulo}, genero ${this.genero}, año de estreno ${this.anio}. Sinopsis: ${this.sinopsis}.`)
    }
}

let peliculas= [
    new Pelicula('Los bañeros','Comedia',1998,'La aventuras de 3 amigos en un playa argentina.'),
    new Pelicula('Los A','Super Héroes y Ficción',2004,'El regreso que Thanos que hace convoca a los super héroes de marvel.'),
    new Pelicula('Los angeles de charlie','Ficción',2002,'Las chicas al ataque que cumplen todas sus misiones')
    ];
// Probamos con los datos ingresados 
// console.log(Pelicula);
// console.log(peliculas[0]);
// console.log(peliculas[0].titulo);
// console.log(peliculas[0].genero);
// console.log(peliculas[0].anio);
// console.log(peliculas[0].sinopsis);

//Muestro los resultados por consola sin hacer uso de metodos/funciones
// let tam = peliculas.length;
// for (let i=0;i<tam;i++){
//     console.log(`La pelicula ${peliculas[i].titulo}, genero ${peliculas[i].genero}, año de estreno ${peliculas[i].anio}. Sinopsis: ${peliculas[i].sinopsis}.`);
// }


// 2- Crea una función que permita mostrar en una lista cada películas con sus datos.
function mostrarPeliculas (peliculas){
let tam = peliculas.length;
for (let j=0; j<tam;j++){
    peliculas[j].mostrarPelicula();
    }
}

mostrarPeliculas(peliculas);