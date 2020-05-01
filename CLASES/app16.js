let auto1 = {
    
    marca: 'Toyota',
    tipo: 'Sedan',
    puertas: 3

};

class Auto {

    constructor(marca, tipo, puertas) {

        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creado = 'Hoy';
    }

}

let auto2 = new Auto('Mazda', 'Sedan', 2);

console.log(auto1);
console.log(auto2);