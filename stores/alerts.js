export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref(null);

  const displayAlert = (color, title, text, variant, density, border, closable) => {
    document.body.style.overflow = 'hidden';
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
    document.body.style.overflow = 'auto';
    alert.value = null;
  };

  return { alert, displayAlert, hideAlert };
});
