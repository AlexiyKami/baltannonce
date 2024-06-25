import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://91.208.197.79:8000'
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

instance.interceptors.request.use((config) => {
  const token = store.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  console.log(config);
  return config;
});

export default instance;
