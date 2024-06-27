export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref(null);

  // color => 'info' || 'warning' || 'success' || 'error'
  // variant => 'outlined' || 'tonal' || 'default'
  // density => 'default' || 'comfortable' || 'compact'
  // border => true || false
  // closable => true || false

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
