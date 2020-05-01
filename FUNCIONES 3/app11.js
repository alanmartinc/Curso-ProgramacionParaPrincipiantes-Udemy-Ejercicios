// Crear una función que me permita determinar la calificación de 3 alumnos. 
// El primero con nota de 100.
// El segundo con nota de 80.
// El tercero con nota de 59.

function calcularNota(nota) {

    let notaLetra = '';

    if (nota >= 90) {
        notaLetra = 'A';
    } else if (nota >= 80) {
        notaLetra = 'B';
    } else if (nota >= 70) {
        notaLetra = 'C';
    } else if (nota >= 60) {
        notaLetra = 'D';
    } else {
        notaLetra = 'F';
    }   

    console.log(nota + ' es igual a ' + notaLetra);

}

calcularNota(100);
calcularNota(80);
calcularNota(59);