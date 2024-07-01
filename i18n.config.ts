import translationRu from '@/shared/config/i18n/ru/translation.json';
import translationEn from '@/shared/config/i18n/en/translation.json';
import translationLv from '@/shared/config/i18n/lv/translation.json';
import translationLt from '@/shared/config/i18n/lt/translation.json';
import translationEe from '@/shared/config/i18n/ee/translation.json';
import translationEs from '@/shared/config/i18n/es/translation.json';
import translationPt from '@/shared/config/i18n/pt/translation.json';
import translationDe from '@/shared/config/i18n/de/translation.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru: {
      translation: translationRu
    },
    en: {
      translation: translationEn
    },
    lv: {
      translation: translationLv
    },
    lt: {
      translation: translationLt
    },
    ee: {
      translation: translationEe
    },
    es: {
      translation: translationEs
    },
    pt: {
      translation: translationPt
    },
    de: {
      translation: translationDe
    }
  }
}));
