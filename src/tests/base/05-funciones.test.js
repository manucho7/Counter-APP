import '@testing-library/jest-dom';
const { getUser, getUsuarioActivo } = require("../../base/05-funciones")


describe('Pruebas en 05 funciones', ()=> {


    test('debe de retornar un objeto', ()=> {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    })

    //get usuarioActivo debe retornar un objeto
    test( 'usuarioActivo debe retornar un objeto', ()=> {

        const nombre = "Juan";
        const user = getUsuarioActivo( nombre );
    
        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        })
        
    })

})
