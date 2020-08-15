import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';


describe('Pruebas en <PrimeraApp />', () => {
    

    test('Demostrar el mensaje "Hola soy goku"', ()=>{

        const saludo = 'Hola soy goku';
        const { getByText } = render( <PrimeraApp saludo={ saludo }/> )
       
        expect( getByText( saludo ) ).toBeInTheDocument();
        
    })


})
