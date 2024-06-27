export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref(null);

  const displayAlert = (color, title, text, variant, density, border, closable) => {
    alert.value = {
      color,
      title,
      text,
      variant,
      density,
      border,
      closable
    };
  };

  const hideAlert = () => {
    alert.value = null;
  };

  return { alert, displayAlert, hideAlert };
});
