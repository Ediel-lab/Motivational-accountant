import { useEffect, useState } from 'react';
import i18n from '../i18n';

export default function useInitI18n() {
  const [initialized, setInitialized] = useState(i18n.isInitialized);

  useEffect(() => {
    if (!initialized) {
      i18n.on('initialized', () => setInitialized(true));
    }
  }, [initialized]);

  return initialized;
}