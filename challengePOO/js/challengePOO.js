class Animal{
    constructor(name,age){
        this.name = name;
           this.age = age;
    }
}

class Perro extends Animal {
    constructor(name,age){
        super(name,age);
    }
    // Metodos
    emitirSonido(){
        document.write('wa wa wa \n');
    }
}

class Gato extends Animal {
    constructor(name,age){
        super(name,age);
    }
    // Metodos
    emitirSonido(){
        document.write('miau miau miau \n');
    }
}

let gato01 = new Gato ('samy',5);
let perro01 = new Perro ('firulais',10);

gato01.emitirSonido();
perro01.emitirSonido();
