import axios from 'axios';
let BASE_URL = "http://api.weatherapi.com/v1/";
let API_KEY = "dfa464158af4491f8e451132213004&q"
const request = (location) => {
    const getRequest = axios.get(`
    ${BASE_URL}
    forecast.json?key=${API_KEY}
    &q=${location}&days=5&aqi=no&alerts=no`);
    return getRequest;
}
export default request;
