import axios from './axios'
import "regenerator-runtime/runtime.js";

export const fetchData = async () => {
    const rates = await axios.get('https://api.ratesapi.io/api/latest')
    return rates
}

export default fetchData;
