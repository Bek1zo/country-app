import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Укажите ваш базовый URL
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;