import AuthService from '@/shared/api/auth';
import { useAlertsStore } from './alerts';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const alertsStore = useAlertsStore();

  // Save the access token in cookies for 5 minutes
  const token = ref(useCookie('token', { expires: new Date(Date.now() + 5 * 60 * 1000) }));

  // Save the refresh token in cookies for 1 day
  const refreshToken = ref(
    useCookie('refresh', { expires: new Date(Date.now() + 24 * 60 * 60 * 1000) })
  );
  const isLoading = ref(false);

  const login = async (user) => {
    isLoading.value = true;
    try {
      const response = await AuthService.login(user);
      if (response.status === 200) {
        token.value = response.data.access;
        refreshToken.value = response.data.refresh;
        router.push('/');
        alertsStore.displayAlert(
          'success',
          'Вход выполнен успешно',
          'Добро пожаловать обратно! Ваш вход выполнен успешно. Мы рады снова видеть вас.',
          'tonal',
          'default',
          true,
          false
        );
      }
    } catch (error) {
      if (error.status === 401) {
        alertsStore.displayAlert(
          'error',
          'Ошибка',
          'Активная учетная запись с указанными учетными данными не найдена',
          'tonal',
          'default',
          true,
          false
        );
      }
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (user, pathSegment) => {
    isLoading.value = true;
    try {
      const { status } = await AuthService.register(user, pathSegment);
      if (status === 201) {
        const response = await AuthService.login({
          username: user.username,
          password: user.password
        });
        if (response.status === 200) {
          token.value = response.data.access;
          refreshToken.value = response.data.refresh;
          router.push('/');
          alertsStore.displayAlert(
            'success',
            'Регистрация успешно завершена',
            'Ваш аккаунт успешно зарегистрирован. Мы рады приветствовать вас в нашем сообществе!',
            'tonal',
            'default',
            true,
            false
          );
        }
      }
    } catch (error) {
      // Set an alert message
      let alertText = '';
      if (error.response.status === 400) {
        if (error.response.data.email && error.response.data.username) {
          alertText = 'Пользователь с этим адресом электронной почты и именем уже существует';
        } else if (error.response.data.email) {
          alertText = 'Пользователь с этим адресом электронной почты уже существует';
        } else if (error.response.data.username) {
          alertText = 'Пользователь с этим именем уже существует';
        }
        alertsStore.displayAlert('error', 'Ошибка', alertText, 'tonal', 'default', true, false);
      }
    } finally {
      isLoading.value = false;
    }
  };

  const updateTokens = (data) => {
    token.value = data.access;
    refreshToken.value = data.refresh;
  };

  const logout = () => {
    token.value = null;
    refreshToken.value = null;
    router.push('/');
  };

  return { token, refreshToken, isLoading, register, login, updateTokens, logout };
});
