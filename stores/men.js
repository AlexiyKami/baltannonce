export const useMenStore = defineStore('men', () => {
  const currentTab = ref(useCookie('tab'));
  if (!currentTab.value) {
    currentTab.value = 'escort';
  }

  const setCurrentTab = (value) => {
    currentTab.value = value;
  };

  return { currentTab, setCurrentTab };
});
