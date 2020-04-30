let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i = 0; i < numeros.length; i++) {

    let numero = numeros[i];

    if (numero % 2 === 0) {
        console.log(numero + ' Es par');
    } else {
        console.log(numero + ' Es impar');
    }

}

