import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
//rafcp crea un default functional component con propTypes :)


const CounterApp = ({ value=10 }) => {

    const [ counter, setCounter ] = useState( value );
//useState retorna un array con 2 valores

    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = ( e ) => {
        setCounter( value );
    }

    const handleAdd = () => {
        setCounter( counter + 1 );
//        setCounter( (c)=> counter + 1); Es lo mismo que la linea de arriba
    }

return (
    <Fragment>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick= { handleAdd }>+1</button>
        <button onClick= { handleReset }>Reset</button>
        <button onClick= { handleSubstract }>-1</button>
    </Fragment>
)}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;