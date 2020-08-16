import '@testing-library/dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import '@testing-library/dom';
import '@testing-library/jest-dom';
import React from 'react';

describe('Pruebas en el <CounterApp/>', () => {
    
    test('debe mostrar <CounterApp/> correctamente', () => {

        const wrapper = shallow( <CounterApp />)
        expect( wrapper ).toMatchSnapshot();

    })
    
test('debe de mostrar el valor por defecto de 100', () => {

    const wrapper = shallow( <CounterApp value={ 100 } />);

    const counterText = wrapper.find('h2').text();
    expect( counterText ).toBe( '100' );
})
    
})
