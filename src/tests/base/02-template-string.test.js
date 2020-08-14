//Este import trae el intellisense de los metodos de test
import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");


describe( 'pruebas en 02-template-string.test.js',()=>{

    test('prueba en el metodo getSaludo', ()=> {

        const nombre = 'Manuel';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!' )
    })
    //getSaludo debe retornar Hola Carlos! si no hay argumento nombre

    test( 'getSaludo debe retornar Hola Carlos! si no hay argumento nombre', ()=> {


        const saludo = getSaludo();
        
        expect( saludo ).toBe('Hola Carlos!');
    })

});

