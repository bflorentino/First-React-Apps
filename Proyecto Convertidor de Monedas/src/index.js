import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getCurrenciesList, convertCurrencies } from './Services/CurrencyService';

convertCurrencies(1000, 'USD', 'PHP')
                                .then(total => {
                                    console.log(total);
                                });
