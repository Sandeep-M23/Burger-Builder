import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-builder-608ee.firebaseio.com/'
});

export default instance;