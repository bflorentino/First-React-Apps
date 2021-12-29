import APIKEY from "./ApiKey"

const URL = "https://free.currconv.com/api"

export const getCurrenciesList = async() => {

    // Gets the list of currencies ant turns the results into an array of objects
    const response = await fetch(`${URL}/v7/currencies?apiKey=${APIKEY}`);
    const { results }  = await response.json();
    const currenciesToArray = Object.values(results);

    return currenciesToArray;
}

export const convertCurrencies = async(amount, fromCurrency, toCurrency) => {

    // Get toCurrency Price
    const response = await fetch(`${URL}/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${APIKEY}`);
    const result = await response.json();

    // Get price from JSON object 
    const price = await result[`${fromCurrency}_${toCurrency}`];

   const total = await price * amount;
    return total;
    //(
    //         {
    //             price,
    //             total: price * amount
    //         }
    //     )
}