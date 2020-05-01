function imprimirTabla(base,limite) {

    for (let i = 1; i <= limite; i++) {
    
    let resultado = base * i;

    console.log(base + ' x ' + i + ' = ' + resultado);
    
    }

}

imprimirTabla(1, 10);
imprimirTabla(2, 10);
imprimirTabla(3, 10);
imprimirTabla(4, 10);
imprimirTabla(5, 10);
imprimirTabla(6, 10);
imprimirTabla(7, 10);
imprimirTabla(8, 10);
imprimirTabla(9, 10);
imprimirTabla(10, 10);