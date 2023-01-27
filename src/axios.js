import axios from "axios";

let axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  headers: {
    'app-id': process.env.REACT_APP_API_KEY,
  },
});

export default axiosInstance;