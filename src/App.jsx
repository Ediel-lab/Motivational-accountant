import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import './App.css';

function App() {
  
  const { t, i18n, ready } = useTranslation();
  const [count, setCount] = useState(10);
  const [fraseAtual, setFraseAtual] = useState('');
  const [operacoes, setOperacoes] = useState([]);
  const [ultimaOperacao, setUltimaOperacao] = useState({ valor: 0, tipo: '' });
  
  if (!ready) {
    return <div>Loading translations...</div>;
  }

  const frasesMotivacionais = t('frases', { returnObjects: true });

  const handleClick = () => {
    const operacao = Math.random() < 0.6 ? 'somar' : 'subtrair';
    const valores = [20, 25, 30];
    const valor = valores[Math.floor(Math.random() * valores.length)];

    const novoValor = operacao === 'somar' ? count + valor : count - valor;
    setCount(novoValor);
    
    setUltimaOperacao({ valor, tipo: operacao });
    
    const novaOperacao = {
      valor,
      tipo: operacao,
      id: Date.now() + Math.random()
    };
    setOperacoes(prev => [...prev, novaOperacao]);

    setTimeout(() => {
      setOperacoes(prev => prev.filter(op => op.id !== novaOperacao.id));
      setUltimaOperacao({ valor: 0, tipo: '' });
    }, 1500);

    if (novoValor < 5000 && Math.floor(novoValor / 250) !== Math.floor(count / 250)) {
      const novaFrase = Array.isArray(frasesMotivacionais) 
        ? frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)]
        : frasesMotivacionais;
      setFraseAtual(novaFrase);
    };
  };

  const getMessage = () => {
    if (count >= 5000) return t('mensagens.parabens');
    if (count > 99) return t('mensagens.cemAtingido');
    return t('mensagens.boaSorte');
  };

  {operacoes.map(op => (
    <div key={op.id} className={`operacao ${op.tipo}`}>
      {op.tipo === 'somar' ? '+' : '-'}{op.valor}
    </div>
  ))}

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* <LanguageSwitcher /> butões de tradução*/}
      
      <h1>{t('common.titulo')}</h1>
      <h2>{t('common.subtitulo')}</h2>
      
      <div className="card">
        <div className="contador-container">
          <div className="contador">{count}</div>
          {ultimaOperacao.tipo && (
            <div className={`operacao ${ultimaOperacao.tipo}`}>
              {ultimaOperacao.tipo === 'somar' ? '+' : '-'}{ultimaOperacao.valor}
            </div>
          )}
        </div>
        
        <button onClick={handleClick}>
          {t('common.botao')}
        </button>
        
        <p className="message">{getMessage()}</p>
        
        {fraseAtual && (
          <div className="motivacional">
            💬 {fraseAtual}
          </div>
        )}
      </div>
      
      <div className="fita-lateral fita-esquerda"></div>
      <div className="fita-lateral fita-direita"></div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
}