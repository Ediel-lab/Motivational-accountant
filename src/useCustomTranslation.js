import { useTranslation } from 'react-i18next';

const useCustomTranslation = () => {
  const { t, i18n, ready } = useTranslation();
  
  // Função para traduzir arrays (como suas frases motivacionais)
  const tArray = (key) => {
    const translated = t(key, { returnObjects: true });
    return Array.isArray(translated) ? translated : [translated];
  };

  // Verifica se é um idioma RTL (árabe)
  const isRTL = i18n.language === 'ar';

  return {
    t,
    tArray,
    i18n,
    ready,
    isRTL,
    currentLanguage: i18n.language,
  };
};

export default useCustomTranslation;