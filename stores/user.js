import Loader from '@/shared/api/api';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const isLoading = ref(false);
  const isError = ref(false);

  const registerUser = async (user) => {
    isLoading.value = true;
    try {
      const { data, status } = await Loader.registerUser(user);
      if (status == 201) {
        user.value = data;
        isError.value = false;
      }
    } catch (error) {
      console.log(error.message);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return { user, isLoading, isError, registerUser };
});
