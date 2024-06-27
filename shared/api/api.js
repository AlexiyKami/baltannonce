import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://91.208.197.79:8000'
});

let authStore;
let alertsStore;

export const injectStores = (first, second) => {
  authStore = first;
  alertsStore = second;
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
        alertsStore.displayAlert(
          'error',
          'Ошибка',
          'Активная учетная запись с указанными учетными данными не найдена',
          'tonal',
          'default',
          true,
          false
        );
        authStore.logout();
      }
    }
    throw error;
  }
);

export default instance;
