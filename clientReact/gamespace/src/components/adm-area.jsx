// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function App() {
  // Estado para armazenar o nome da nova plataforma a ser adicionada
  const [plataformName, setPlataformName] = useState('');
  
  // Lista de plataformas (substitua isso pelos seus dados reais)
  const [plataforms, setPlataforms] = useState([]);

  // Função para adicionar uma nova plataforma
  const addPlataform = () => {
    if (plataformName.trim() === '') {
      return; // Evita adicionar plataformas em branco
    }

    const newPlataform = { name: plataformName };
    setPlataforms([...plataforms, newPlataform]);
    setPlataformName(''); // Limpa o campo de entrada após a adição
  };

  return (
    <div>
      <header className="adm-navigation-header">
        <img src="./assets/imgs/logo.svg" alt="Logo" id="logo" />
        <img src="./assets/imgs/logo-mobile-2.svg" alt="" id="logo-mobile" />
        <h1>Adminstrador</h1>
      </header>
      <main className="adm-dashboard">
        <div className="plataformForm">
          <h1>Adicionar Plataforma</h1>
          <form onSubmit={(e) => { e.preventDefault(); addPlataform(); }}>
            <input
              type="text"
              name="plataformName"
              id="plataformName"
              placeholder="Nome da Plataforma:"
              value={plataformName}
              onChange={(e) => setPlataformName(e.target.value)}
            />
            <button id="CreatePlataform" type="submit">Adicionar</button>
          </form>
        </div>
        <div className="plataformsRankingStatistic">
          <p>Plataformas com mais jogos adicionados</p>
          <ul>
            {plataforms.map((plataform, index) => (
              <li key={index}>
                <div id="plataformName-item">{plataform.name}</div>
                <div id="optionsCrud">
                  <button id="edit">
                    <img src="./assets/imgs/edit.png" alt="" id="options-btn" />
                  </button>
                  <button id="delete">
                    <img src="./assets/imgs/delete.png" alt="" id="options-btn" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
