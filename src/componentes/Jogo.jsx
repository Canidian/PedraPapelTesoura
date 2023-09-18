import React, { useState } from 'react';

const opcoes = ['pedra', 'papel', 'tesoura'];

const Jogo = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState(null);
  const [escolhaComputador, setEscolhaComputador] = useState(null);
  const [resultado, setResultado] = useState(null);

  const escolherOpcao = (opcao) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaUsuario(opcao);
    setEscolhaComputador(escolhaComputador);

    if (opcao === escolhaComputador) {
      setResultado('Empate!');
    } else if (
      (opcao === 'pedra' && escolhaComputador === 'tesoura') ||
      (opcao === 'papel' && escolhaComputador === 'pedra') ||
      (opcao === 'tesoura' && escolhaComputador === 'papel')
    ) {
      setResultado('Você venceu!');
    } else {
      setResultado('Computador venceu!');
    }
  };

  return (
    <div>
      <h1>Jogo Pedra | Papel | Tesoura</h1>
      <div>
        <button onClick={() => escolherOpcao('pedra')}>Pedra</button>
        <button onClick={() => escolherOpcao('papel')}>Papel</button>
        <button onClick={() => escolherOpcao('tesoura')}>Tesoura</button>
      </div>
      {escolhaUsuario && escolhaComputador && resultado && (
        <div className="info-box"> {}
          <p>Sua escolha: {escolhaUsuario}</p>
          <p>Escolha do Computador: {escolhaComputador}</p>
          <p class="vencedor"><b>Resultado: {resultado}</b></p>
        </div>
      )}
    </div>
  );
};

export default Jogo;
