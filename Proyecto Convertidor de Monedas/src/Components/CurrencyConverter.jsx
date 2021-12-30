import React, {useState, useEffect} from 'react';
import { convertCurrencies, getCurrenciesList } from '../Services/CurrencyService';
import Input from './Input';
import SelectCurrency from './SelectCurrency';

const CurrencyConverter = () => {
    
    let fromCurrency, toCurrency, amount;
    
    const [ currenciesList, setCurrenciesList ] = useState([]);
    const [ converted, setConverted ] = useState("");

    const convert = e => convertCurrencies(amount, fromCurrency, toCurrency)
                        .then(item => {
                            setConverted(`${item.total} ${toCurrency}`);
                        }).catch(error => {
                            setConverted("Hubo un error al realizar la conversión. Intente nuevamente más tarde.")
                        }); 

    useEffect(()=> {
        getCurrenciesList()
            .then( currencies => setCurrenciesList([...currencies]))
    }, []);

    return (
        <div className='CurrencyConverter'>
            <h1 className='title'>Convertidor de moneda </h1>
            
            <div className='select-Currency'>
                <SelectCurrency 
                    currenciesList={ currenciesList } 
                    id={"fromCurrency"} 
                    name={"Moneda Base"} 
                    optionSelected={(fromCur) => fromCurrency = fromCur} 
                />

            </div>
            <div className='select-Currency'>
                <SelectCurrency 
                    currenciesList={ currenciesList } 
                    id={"toCurrency"} 
                    name={"Convertir a"} 
                    optionSelected={(toCur) => toCurrency = toCur} 
                />
            </div>

            <div className='select-Currency'>
            <Input 
                getAmount={(Amount) => amount = Amount} 
            />
            </div>

            <div className='btn-convert'>
                <button onClick={ convert }> Convertir </button>
            </div>

            <h2>{converted}</h2>
            
        </div>
    )
}

export default CurrencyConverter