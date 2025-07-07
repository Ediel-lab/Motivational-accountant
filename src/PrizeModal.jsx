import React, { useState } from 'react';
import './PrizeModal.css';

const PrizeModal = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1 = escolha, 2 = ebook, 3 = cupom
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  // Seu código fixo da Amazon - substitua pelo seu código real
  const amazonCode = "SEUCODIGO10"; // Exemplo: "TECNO20", "PROMO15", etc
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEbookSubmit = () => {
    if (!email) {
      setEmailError('Por favor, insira um email');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Email inválido');
      return;
    }
    
    setEmailError('');
    alert(`Ebook enviado para: ${email}`);
    // Aqui você pode adicionar a lógica para enviar o email de verdade
  };

  return (
    <div className="prize-modal-overlay">
      <div className="prize-modal">
        {step === 1 && (
          <>
            <h2>PARABÉNS!</h2>
            <div className="prize-icon">🏆</div>
            <p>Você atingiu a marca de 5000 pontos!</p>
            <p className="prize-description">Escolha seu prêmio:</p>
            <div className="prize-options">
              <button 
                className="prize-option" 
                onClick={() => setStep(2)}
              >
                📚 Ebook Grátis
              </button>
              <button 
                className="prize-option" 
                onClick={() => setStep(3)}
              >
                🏷️ Cupom Amazon
              </button>
            </div>
            <button className="close-button" onClick={onClose}>
              Talvez na próxima!
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>📚 Ebook Grátis</h2>
            <div className="ebook-cover"></div>
            <p>Digite seu email para receber o ebook:</p>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className={`email-input ${emailError ? 'invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error-message">{emailError}</div>}
            <button 
              className="claim-button"
              onClick={handleEbookSubmit}
            >
              Receber Ebook
            </button>
            <button 
              className="back-button" 
              onClick={() => setStep(1)}
            >
              Voltar
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Cupom Amazon!</h2>
            <div className="amazon-logo">
              <svg viewBox="0 0 512 152" xmlns="http://www.w3.org/2000/svg">
                <path d="M113 0v151H47V0h66zm-4 51H51v44h58V51zM256 0v151h-66V0h66zm-4 51h-58v44h58V51zM0 0v151h66V0H0zm4 51h58v44H4V51zm512-51v151h-66V0h66zm-4 51h-58v44h58V51z" fill="#000"/>
                <path d="M305 0v151h66V0h-66zm4 51h58v44h-58V51z" fill="#F90"/>
              </svg>
            </div>
            <div className="code-container">
              <div className="promo-code">{amazonCode}</div>
              <div className="code-instructions">
                <p>Use este código na Amazon para obter seu desconto:</p>
                <ol className="usage-steps">
                  <li>1. Acesse <a href="https://www.amazon.com.br" target="_blank" rel="noopener">Amazon.com.br</a></li>
                  <li>2. Adicione produtos elegíveis ao carrinho</li>
                  <li>3. No checkout, insira o código</li>
                  <li>4. O desconto será aplicado automaticamente</li>
                </ol>
                <p className="warning-note">⚠️ Este cupom é válido até DD/MM/AAAA ou enquanto durarem os estoques</p>
              </div>
            </div>
            <button 
              className="copy-button"
              onClick={() => {
                navigator.clipboard.writeText(amazonCode);
                alert('Código copiado! Aproveite seu desconto na Amazon!');
              }}
            >
              Copiar Código
            </button>
            <button 
              className="amazon-button"
              onClick={() => window.open('https://www.amazon.com.br', '_blank')}
            >
              Ir para Amazon
            </button>
            <button 
              className="back-button" 
              onClick={() => setStep(1)}
            >
              Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PrizeModal;