function describirPersona(p) {

    console.log(`${ p.nombre } tiene una edad de ${ p.edad } y mide ${ p.estatura }`);

}



let persona = {

    nombre: 'Alan',
    edad: 22,
    estatura: 1.75,

}   

describirPersona(persona);