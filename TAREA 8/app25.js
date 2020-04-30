function masLargo(heroes) {

    let nombreLargo = '';

    for(let i = 0; i < heroes.length; i++) {

        let nombre = heroes[i];

        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }

    }

    return nombreLargo;

}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroeLargo = masLargo(heroes);


console.log(heroeLargo); // Profesor Charles Xavier