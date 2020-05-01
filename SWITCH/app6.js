/* 1= lunes, 2= martes... 
0 es el domingo */

let dia = 0;

switch (dia) {

    case 0: 
        console.log('Es domingo');
        break;
    
    case 1: 
        console.log('Es lunes');
        break;
    
    case 2: 
        console.log('Es martes');
        break;

    case 3: 
        console.log('Es miércoles');
        break;
    
    case 4: 
        console.log('Es jueves');
        break;
    
    case 5: 
        console.log('Es viernes');
        break;
    
    case 6: 
        console.log('Es sábado');
        break;
    
    default:
        console.log('El día ingresado no es permitido');
        
}