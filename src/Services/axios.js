import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-fir-3a5cd.cloudfunctions.net/api"
    // 'http://localhost:5001/fir-3a5cd/us-central1/api'
})

export default instance;