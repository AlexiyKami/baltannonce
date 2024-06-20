import Loader from '@/shared/api/api';

export const useAdvertiserStore = defineStore('advertiser', () => {
  const advertiser = ref(null);
  const isLoading = ref(false);
  const isError = ref(false);

  const registerAdvertiser = async (advertiser) => {
    isLoading.value = true;
    try {
      const { data, status } = await Loader.registerAdvertiser(advertiser);
      if (status == 201) {
        advertiser.value = data;
        isError.value = false;
      }
    } catch (error) {
      console.log(error.message);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  return { advertiser, isLoading, isError, registerAdvertiser };
});
