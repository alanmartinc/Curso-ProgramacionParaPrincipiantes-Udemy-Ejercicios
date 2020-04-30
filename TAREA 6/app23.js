for (let i = 1; i <= 5; i++) {

    let tabla = '';

    for (let j = 1; j <= 5; j++) {

        tabla += `${ j * i } `; // O se puede poner j.toString()

    }

    console.log(tabla);

}