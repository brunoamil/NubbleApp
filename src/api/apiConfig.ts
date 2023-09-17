import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.6imPn-imvZ46T9L4RQ_x5OkZnivFDz_m7TYrw19spk6sAyBY3TljYhmWdxxr',
  },
});
