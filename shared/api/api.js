import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://91.208.197.79:8000'
});

let authStore;

export const injectStore = (_store) => {
  authStore = _store;
};

instance.interceptors.request.use((config) => {
  const token = authStore.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${instance.defaults.baseURL}/auth/token/refresh/`, {
          refresh: authStore.refreshToken
        });
        authStore.updateTokens(response.data);
        return instance.request(originalRequest);
      } catch (e) {
        console.log('User is not authorized');
        authStore.logout();
      }
    }
    throw error;
  }
);

export default instance;
