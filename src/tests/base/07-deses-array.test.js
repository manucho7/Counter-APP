import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe( 'Pruebas en desestructuracion-arrays', ()=>{

    test('debe retornar un string y un numero', ()=>{

        const [ letras, numeros ] = retornaArreglo();

        expect( letras ).toBe( 'ABC' );
        expect( numeros ).toBe( 123 );
    })


})