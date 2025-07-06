import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = {
    en: { nativeName: 'English', flag: '🇺🇸' },
    zh: { nativeName: '中文', flag: '🇨🇳' },
    es: { nativeName: 'Español', flag: '🇪🇸' },
    hi: { nativeName: 'हिन्दी', flag: '🇮🇳' },
    pt: { nativeName: 'Português', flag: '🇧🇷' },
    ar: { nativeName: 'العربية', flag: '🇸🇦' },
    ru: { nativeName: 'Русский', flag: '🇷🇺' },
    ja: { nativeName: '日本語', flag: '🇯🇵' },
    ko: { nativeName: '한국어', flag: '🇰🇷' },
  };

  const handleLanguageChange = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      console.log('Idioma alterado para:', lng);
    } catch (error) {
      console.error('Erro ao mudar idioma:', error);
    }
  };

  return (
    <div className="language-switcher">
      {Object.keys(languages).map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => handleLanguageChange(lng)}
          disabled={i18n.language === lng}
          className={i18n.language === lng ? 'active' : ''}
          aria-label={`Mudar para ${languages[lng].nativeName}`}
          lang={lng} // Melhora acessibilidade
        >
          {languages[lng].flag} {languages[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;