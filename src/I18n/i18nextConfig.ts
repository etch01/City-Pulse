import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './Language/en.json';
import ar from './Language/ar.json';
import {LangCode} from './languageUtils';
import detector from "i18next-browser-languagedetector";
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

const initalizeI18Next = async() => {
  const savedLang = await AsyncStorage.getItem('appLanguage');

  i18n.use(initReactI18next).use(detector)
  .init({
    debug: false,
    resources,
    lng: savedLang || LangCode.en,
    fallbackLng: LangCode.ar,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });
};

export default {initalizeI18Next};