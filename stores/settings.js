export const useSettingsStore = defineStore('settings', () => {
  const isDarkMode = ref(useCookie('darkmode', { maxAge: 60 * 60 * 24 * 365 }));

  const switchTheme = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return { isDarkMode, switchTheme };
});
