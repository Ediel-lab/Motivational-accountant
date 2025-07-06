import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [fraseAtual, setFraseAtual] = useState('')
  const [operacoes, setOperacoes] = useState([]);
  const [ultimaOperacao, setUltimaOperacao] = useState({ valor: 0, tipo: '' });
  
  const frasesMotivacionais = [
    'Você está mais perto do que imagina!',
    'Cada passo conta. Continue!',
    'A persistência te levará longe.',
    'Você nasceu para conquistar!',
    'Não pare agora, o topo te espera!',
    'A jornada é tão importante quanto o destino.',
    'Você é mais forte do que pensa.',
    'Acredite no processo.',
    'Continue firme, a vitória está logo ali!',
    'Você está fazendo um ótimo trabalho!',
    'Respira fundo e vai!',
    'A meta é 5000, e você vai chegar lá!',
    'Confie em si mesmo!',
    'Você está brilhando!',
    'Nada pode te parar agora!',
    'Nada pode te parar agora! - Bem, só o seu dedo pode, eu acho.',
    'Força, foco e fé!',
    'Você está escrevendo sua própria história!',
    'Cada clique é um passo rumo ao sucesso!',
    'Vamos com tudo!',
    'Você está quase lá!',
    'O esforço de hoje é o sucesso de amanhã!',
    'A cada clique, você se aproxima mais do seu objetivo!',
    'A vitória é a soma de pequenos esforços repetidos dia após dia!',
    'Você é capaz de coisas incríveis!',
    'Acredite, você está fazendo a diferença!',
    'Desafios são oportunidades disfarçadas.',
    'Você é a prova de que esforço traz resultados!',
    'Continue assim, você está indo muito bem!',
    'Cada dia é uma nova chance de brilhar!',
    'Você está construindo algo grandioso!',
    'A sua determinação é inspiradora!',
    'Você está no caminho certo!',
    'Você é capaz de ir além do que imagina.',
    'A sua jornada é única e especial!',
    'Acredite: cada tentativa te aproxima da conquista.',
    'Você está fazendo história com cada clique!',
    'A sua garra é admirável!',
    'Você está superando o seus limites!',
    'O impossível é apenas questão de tempo e dedicação.',
    'Você é um exemplo de perseverança!',
    'Sua determinação é sua maior força',
    'Grandes conquistas começam com pequenos passos.',
    'há, se você soubesse o que esta no final, você não pararia agora!',
  ]

  const handleClick = () => {
    const operacao = Math.random() < 0.6 ? 'somar' : 'subtrair';
    const valores = [20, 25, 30];
    const valor = valores[Math.floor(Math.random() * valores.length)];

    const novoValor = operacao === 'somar' ? count + valor : count - valor;
    setCount(novoValor);
    
    // Atualiza a operação atual para animação
    setUltimaOperacao({ valor, tipo: operacao });
    
    // Adiciona à lista de operações para múltiplas animações
    const novaOperacao = {
      valor,
      tipo: operacao,
      id: Date.now() + Math.random()
    };
    setOperacoes(prev => [...prev, novaOperacao]);

    // Remove a operação após a animação
    setTimeout(() => {
      setOperacoes(prev => prev.filter(op => op.id !== novaOperacao.id));
      setUltimaOperacao({ valor: 0, tipo: '' });
    }, 1500);

    // Lógica das frases motivacionais
    if (novoValor < 5000 && Math.floor(novoValor / 250) !== Math.floor(count / 250)) {
      const novaFrase = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];
      setFraseAtual(novaFrase);
    };
  };

  {operacoes.map(op => (
  <div key={op.id} className={`operacao ${op.tipo}`}>
    {op.tipo === 'somar' ? '+' : '-'}{op.valor}
  </div>))}

  return (
    <>
      <h1>Contador</h1>
      <h2>motivacional</h2>
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
          Tentar mais uma vez
        </button>
        {count >= 5000 ? (
          <p className="message">🎉 Parabéns! Você alcançou os 5000!</p>
        ) : count > 99 ? (
          <p className="message">🚀 100 atingido! Rumo aos 5000!</p>
        ) : (
          <p className="message">Boa sorte!</p>
        )}
        {fraseAtual && (
          <div className="motivacional" style={{ marginTop: '20px', fontStyle: 'italic' }}>
            💬 {fraseAtual}
          </div>
        )}
      </div>
      <>
        <div className="fita-lateral fita-esquerda"></div>
        <div className="fita-lateral fita-direita"></div>
      </>
    </>
  )
}

export default App
