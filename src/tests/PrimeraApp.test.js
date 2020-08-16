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
    });

    test( 'debe de mostrar el subtitulo enviado por props', ()=>{

        const saludo = 'Hola soy goku';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
                />
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe( subTitulo ); 
    });

})
