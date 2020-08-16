import '@testing-library/dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';

describe('Pruebas en el <CounterApp/>', () => {
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );
    })
    
    test('debe mostrar <CounterApp/> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value={ 100 } />);
        
        const counterText = wrapper.find('h2').text();

        expect( counterText ).toBe( '100' );
    })


    test('debe de incrementar con el boton +1', () => {
        //busco el boton de la posicion 0 - el primero 
        wrapper.find('button').at(0).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    })


    test('debe de decrementar con el boton -1 ', () => {
        //busco el boton de la posicion 2 el ultimo
        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');
    })

})
