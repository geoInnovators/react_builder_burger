import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a2269.firebaseio.com/'
});

export default instance;