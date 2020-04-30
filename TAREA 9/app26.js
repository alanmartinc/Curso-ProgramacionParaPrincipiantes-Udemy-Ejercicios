function filtrarPorLetra(heroes, letra) {

    let nuevoHeroe = [];

    for(let i = 0; i < heroes.length; i++) {

        let nombre = heroes[i];

        if(nombre[0] === letra) {
            nuevoHeroe.push(nombre);
        }

    }

    return nuevoHeroe;

}

// CaSeNsItIvE : 'D' === 'd' da como resultado false.

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra(heroes, 'S');

console.log(heroesCon); // She Hulk, Spiderman