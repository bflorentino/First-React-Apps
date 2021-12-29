import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getCurrenciesList, convertCurrencies } from './Services/CurrencyService';

const value = convertCurrencies(100, "USD", "DOM").then(amount => amount);