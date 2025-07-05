import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [fraseAtual, setFraseAtual] = useState('')

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
    const operacao = Math.random() < 0.6 ? 'somar' : 'subtrair'
    const valores = [20, 25, 30]
    const valor = valores[Math.floor(Math.random() * valores.length)]

    const novoValor = operacao === 'somar' ? count + valor : count - valor
    setCount(novoValor)

    // Mostra nova frase a cada múltiplo de 250 (sem repetir se já mostrou)
    if (novoValor < 5000 && Math.floor(novoValor / 250) !== Math.floor(count / 250)) {
      const novaFrase = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)]
      setFraseAtual(novaFrase)
    }
  }

  return (
    <>
      <h1>Contador</h1>
      <div className="card">
        <button onClick={handleClick}>
          O contador está em: {count}
        </button>
        {count >= 5000 ? (
          <p className="message">🎉 Parabéns! Você alcançou os 5000!</p>
        ) : count > 100 ? (
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
    </>
  )
}

export default App
