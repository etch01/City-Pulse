import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './Language/en.json';
import ar from './Language/ar.json';
import {LangCode} from './languageUtils';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

const initalizeI18Next = () => {
  i18n.use(initReactI18next).init({
    debug: false,
    resources,
    lng: LangCode.en,
    fallbackLng: LangCode.en,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default {initalizeI18Next};