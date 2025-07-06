import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: false,
    supportedLngs: ['en', 'zh', 'es', 'hi', 'pt', 'ar', 'ru', 'ja', 'ko'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['navigator', 'htmlTag'], 
      caches: [] 
    }
  });

// Adicione listeners para debug
i18n.on('languageChanged', (lng) => {
  console.log('Idioma mudou para:', lng);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Falha ao carregar ${lng}/${ns}:`, msg);
});

export default i18n;