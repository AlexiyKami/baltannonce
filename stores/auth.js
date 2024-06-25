import AuthService from '@/shared/api/auth';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();

  const token = ref(useCookie('token'));
  const refreshToken = ref(useCookie('refresh'));
  const isLoading = ref(false);
  const isError = ref(false);

  const login = async (user) => {
    isLoading.value = true;
    try {
      const { data, status } = await AuthService.login(user);
      if (status === 200) {
        token.value = data.access;
        refreshToken.value = data.refresh;
        isError.value = false;
      }
    } catch (error) {
      console.log(error.message);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (user, pathSegment) => {
    isLoading.value = true;
    try {
      const { status } = await AuthService.register(user, pathSegment);
      if (status === 201) {
        isError.value = false;
        await login({ username: user.username, password: user.password });
      }
    } catch (error) {
      console.log(error.message);
      isError.value = true;
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

  return { token, refreshToken, isLoading, isError, register, login, updateTokens, logout };
});
