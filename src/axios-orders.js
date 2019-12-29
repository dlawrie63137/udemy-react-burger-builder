import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-dl.firebaseio.com/'
});

export default instance;