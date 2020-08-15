import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp />', () => {
    // test('Demostrar el mensaje "Hola soy goku"', () => {
    //     const saludo = 'Hola soy goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/> )
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp/> correctamente', ()=>{

        const wrapper = shallow( <PrimeraApp saludo='Hola soy goku'/> );

        expect( wrapper ).toMatchSnapshot();
    })

})
