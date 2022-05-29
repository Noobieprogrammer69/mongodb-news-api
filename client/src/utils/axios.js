import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://mongo-db-loginproject.herokuapp.com'
});

export default instance;