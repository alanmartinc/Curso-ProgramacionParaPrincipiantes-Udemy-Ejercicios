/* crear un algoritmo, que basado en la nota imprima si el alumno aprobo la materia */
// Aprueba con 7
/* Si el alumno tiene nota menor a 7, imprimir un mensaje que diga: Por favor estudie más */

let nota = 5;

if (nota >= 7) {
    console.log('El alumno aprueba la clase');
} else if (nota < 6) {
    console.log('Por favor estudie más');
} else {
    console.log('El alumno NO aprueba la clase');
}

console.log('Fin del programa');