import APIKEY from "./ApiKey"

const URL = "https://free.currconv.com/api"

export const getCurrenciesList = async() => {

    let currenciesList;

    // The API just offers 100 free Requests per hour, so in order to avoid making request
    // constantly the currencies list will be saved in local storage if it doesn't exist.
    if(!JSON.parse(localStorage.getItem("currenciesList"))){
        
        // Gets the list of currencies ant turns the results into an array of objects
        const response = await fetch(`${URL}/v7/currencies?apiKey=${APIKEY}`);
        const { results }  = await response.json();
        const currenciesToArray = Object.values(results);
        currenciesList = localStorage.setItem(JSON.stringify(currenciesToArray));
    }
    else{
        currenciesList = JSON.parse(localStorage.getItem("currenciesList"));
    }

    return currenciesList;
}

export const convertCurrencies = async(amount, fromCurrency, toCurrency) => {

    // Get toCurrency Price
    const response = await fetch(`${URL}/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${APIKEY}`);
    const result = await response.json();

    // Get price from JSON object 
    const price = result[`${fromCurrency}_${toCurrency}`];

    return(
            {
                price,
                total: price * amount
            }
        );
}