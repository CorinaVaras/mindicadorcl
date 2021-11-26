import axios from 'axios';

const indicatorclDB = axios.create({
    baseURL: 'https://mindicador.cl'
});

export default indicatorclDB;