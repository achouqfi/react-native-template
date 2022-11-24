import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {resources} from './resources';

//TODO : migrate from expo localization package
// import * as Localization from 'expo-localization';

//get default OS language
// const init_lang = Localization.getLocales()[0].languageCode;

//i18N Initialization
i18n.use(initReactI18next).init({
  resources,
  lng: 'en', //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
