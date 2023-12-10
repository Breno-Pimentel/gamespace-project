// import { Link } from "react-router-dom"; // Certifique-se de importar o Link se você estiver usando o React Router

const dashboard = () => {
  return (
    <div className="container">
      <div className="add-game-modal">
        <div className="exit">
          <img src="./assets/imgs/close.svg" alt="" className="exit-logo" />
        </div>
        <form action="" className="add-game-form" method="post" encType="multipart/form-data">
          <input type="file" name="image" id="image-game-file" />
          <input
            type="text"
            name="name"
            id="gameName"
            placeholder="Nome do jogo"
          />
          <select
            name="Plataforma"
            id="plataform"
            className="selector-game-options"
          >
            <option value="Default">Selecione uma Plataforma</option>
            <option value="Xbox">Xbox</option>
            <option value="Playstation">Playstation</option>
            <option value="Windows">Windows</option>
            <option value="MacOS">MacOS</option>
            <option value="Linux">Linux</option>
          </select>
          <select name="Genero" id="genre" className="selector-game-options">
            <option value="Default">Selecione um gênero</option>
            <option value="Ação">Ação</option>
            <option value="FPS">FPS</option>
            <option value="RPG">RPG</option>
            <option value="Simulação">Simulação</option>
            <option value="Esportes">Esportes</option>
          </select>
          <input
            type="number"
            name="release-yaer"
            id="release"
            placeholder="Selecione o ano de lançamento"
          />
          <select name="idioma" id="language" className="selector-game-options">
            <option value="Default">Selecione o idioma</option>
            <option value="Português">Português do Brasil</option>
            <option value="Inglês">Inglês</option>
            <option value="Francês">Francês</option>
            <option value="Alemão">Alemão</option>
            <option value="Italiano">Italiano</option>
          </select>
          <select name="Recurso" id="resource" className="selector-game-options">
            <option value="Default">Selecione o estilo do jogo</option>
            <option value="Online">Online</option>
            <option value="Single-player">Single-Player</option>
            <option value="Coop">Coop</option>
            <option value="Multiplayer">Multiplayer</option>
          </select>
          <select name="Status" id="status" className="selector-game-options">
            <option value="Default">Selecione o status do jogo</option>
            <option value="Iniciado">Iniciado</option>
            <option value="10%">10%</option>
            <option value="20%">20%</option>
            <option value="30%">30%</option>
            <option value="40%">40%</option>
            <option value="50%">50%</option>
            <option value="60%">60%</option>
            <option value="70%">70%</option>
            <option value="80%">80%</option>
            <option value="90%">90%</option>
            <option value="Zerado">Zerado</option>
          </select>
          <input type="button" name="" id="createGame" value="Criar" />
        </form>
      </div>
      {/* Adicione mais conteúdo do dashboard aqui */}
      <footer><p>Todos os direitos reservados</p></footer>
    </div>
  );
};

export default dashboard;

