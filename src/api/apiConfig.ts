import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mw.EdeKoSq8wbygaoeUpy2njBDtMmhuGp3lI3vRE99HEu9183UTIYj11FFfqXMq',
  },
});
