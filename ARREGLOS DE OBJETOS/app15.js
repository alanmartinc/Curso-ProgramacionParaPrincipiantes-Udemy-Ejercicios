let persona1 = {

    nombre: 'Alan',
    edad: 22

}; // Después de un objeto, Cómo estamos declarando una variable, se acostumbra a poner ;

let persona2 = {

    nombre: 'Lucas',
    edad: 24

};

let persona3 = {

    nombre: 'Maria',
    edad: 26

};

let personas = [persona1, persona2, persona3]; // Declaramos un arreglo

for (let i = 0; i < personas.length; i++){

    let persona = personas[i];

    console.log(`${ persona.nombre } -- ${ persona.edad }`);

}
