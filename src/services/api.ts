import axios from 'axios';

const api = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/'
});

api.interceptors.request.use(
  async config => {
    config.headers = {
      'user-key': 'ef867d2a36e31ee7f28fde9a7edd1240'
    };

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default api;
