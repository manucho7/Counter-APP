import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
//rafcp crea un default functional component con propTypes :)


const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( 0 );
//useState retorna un array con 2 valores





    const handleAdd = (e) => {
        setCounter( counter + 1 );
//        setCounter( (c)=> counter + 1); Es lo mismo que la linea de abajo
    }

return (
    <Fragment>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>

        <button onClick= { handleAdd }>+1</button>
    </Fragment>
)}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;