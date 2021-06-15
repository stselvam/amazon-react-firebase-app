import axios from 'axios';

const instance = axios.create({
    baseURL: "YOUR_API_ENDPOINT"
    // 'http://localhost:5001/fir-3a5cd/us-central1/api'
})

export default instance;
