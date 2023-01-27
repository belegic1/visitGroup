import axios from "axios";

let axiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  headers: {
    'app-id': '63d312131c8edaf3a8193a54',
  },
});

export default axiosInstance;