import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = ( { currenciesList, id, name, optionSelected } ) => {

    const [selectOption, setSelectoption] = useState("");
    
    const changeSelection = e => setSelectoption(e.target.value);

    useEffect(() => {
        optionSelected(selectOption);
    }, [selectOption, optionSelected]);

    return (
        <>
        <label>{name}</label>
        <select 
            name={`${name}`} 
            id={`${id}`} 
            onChange={ changeSelection }
        >
        {
            currenciesList.map(currency =>(
                <option 
                    key = {currency.id} 
                    value={currency.id}>
                        {currency.currencyName}
                </option>
                ))
            }
        </select>
        </>
    )
}

export default SelectCurrency;

SelectCurrency.proptTypes = {
    currenciesList: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    optionSelected: PropTypes.func.isRequired
}