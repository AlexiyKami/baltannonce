import { setScrollHidden } from '@/shared/lib/helpers/scroll-helpers.js';

export const useAlertsStore = defineStore('alerts', () => {
  const alert = ref(null);

  const displayAlert = (color, title, text, variant, density, border, closable) => {
    setScrollHidden(true);
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
    setScrollHidden(false);
    alert.value = null;
  };

  return { alert, displayAlert, hideAlert };
});
