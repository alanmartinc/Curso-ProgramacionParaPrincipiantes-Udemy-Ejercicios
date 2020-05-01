class Auto {

    constructor(marca, tipo, puertas) {

        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.creado = 'Hoy';
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderAuto() {

        if (this.encendido) {

            console.error('El auto ya estaba encendido... Se daño el motor');

        } else {

            this.encendido = true;

            console.log('El auto está encendido');

        }

            return this;

    }

    realizarViaje(consumo) {

        if (!this.encendido) return console.log('Auto apagado');

        if (consumo > this.gasolina) return console.log('No puede realizar el viaje: Gasolina ' + this.gasolina);

            this.gasolina = this.gasolina - consumo;

            return 'Le queda ' + this.gasolina;

    }

}

let auto = new Auto('Mazda', 'Sedan', 2);

console.log(auto);