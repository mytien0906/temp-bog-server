import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import viUsers from '../translations/vi/users.json';

const resources = {
  vi: {
    translation: {
      users: viUsers,
    },
  },
  en: {
    translation: {
    //   users: enUsers,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  interpolation: { escapeValue: false },
  keySeparator: ':',
});

export default i18n;
