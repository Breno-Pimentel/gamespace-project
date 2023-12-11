import "./gamepage.css"; // Importe o arquivo CSS correspondente

const gamepage = () => {
  return (
    <div className="game-page-container">
      <div className="blur"></div>
      <div className="central-wrapper">
        <div className="game-image">
          <img src="" alt="Imagem do jogo" />
        </div>
        <div className="information">
          <h1>Título</h1>
          <p>Gênero do Jogo</p>
          <p>Ano de Lançamento</p>
          <p>Recurso</p>
          <p>Idioma</p>
          <p>Status</p>
          <p>Reproduzível em:</p>
          <p>Nota</p>
        </div>
      </div>
    </div>
  );
};

export default gamepage;
