import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const Input = ( { getAmount }) => {

    const [inputValue, setInputValue] = useState(0);
    
    const numHandler = e => setInputValue(e.target.value);
    
    useEffect(()=> {
        getAmount(inputValue);
    }, [inputValue, getAmount])

    return (
        <>
        <label>Cantidad</label>
        <input 
            type="number" 
            value={inputValue} 
            onChange={ numHandler }
        />
        </>
    )
}

export default Input

Input.proptTypes = {
    getAmount: PropTypes.func.isRequired
}

