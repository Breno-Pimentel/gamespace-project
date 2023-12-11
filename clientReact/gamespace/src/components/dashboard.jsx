import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

import imgClose from "../assets/imgs/close.svg";
import imgLogo from "../assets/imgs/logo.svg";
import imgMobileLogo from "../assets/imgs/logo-mobile-2.svg";
import imgUser from "../assets/imgs/User.svg";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    platform: "Default",
    genre: "Default",
    releaseYear: "",
    language: "Default",
    resource: "Default",
    status: "Default",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: imageFile }));
  };

  const handleCreateGame = async () => {
    const apiUrlUpload = "http://www.prestecinfo.com.br:3001/upload";
    const apiUrlCreateGame = "http://www.prestecinfo.com.br:3001/create/game";

    const uploadImage = async () => {
      const formDataImage = new FormData();
      formDataImage.append("img", formData.image);

      try {
        const result = await fetch(apiUrlUpload, {
          method: "POST",
          body: formDataImage,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Image upload result:", data);
            createGameFetch();
          });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    const createGameFetch = async () => {
      const data = {
        name: formData.name,
        platform: formData.platform,
        genre: formData.genre,
        releaseYear: formData.releaseYear,
        language: formData.language,
        resource: formData.resource,
        status: formData.status,
      };

      try {
        const result = await fetch(apiUrlCreateGame, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (error) {
        console.error("Error creating game:", error);
      }
    };

    uploadImage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleCreateGame();
  };

  const openAddGameModal = () => {
    const addGameModal = document.querySelector(".add-game-modal");
    addGameModal.style.display = "block";
  };

  const openAddExistingGameModal = () => {
    const addExistingGameModal = document.querySelector(".existingGameModal");
    addExistingGameModal.style.display = "block";
  };

  const closeModals = () => {
    const addGameModal = document.querySelector(".add-game-modal");
    const addExistingGameModal = document.querySelector(".existingGameModal");
    addGameModal.style.display = "none";
    addExistingGameModal.style.display = "none";
  };
  return (
    <div className="container">
      <div className="add-game-modal">
        <div className="exit" onClick={closeModals}>
          <img src={imgClose} alt="" className="exit-logo" />
        </div>
        <form
          action=""
          className="add-game-form"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            type="file"
            name="image"
            id="image-game-file"
            onChange={{ handleFileChange }}
            value={formData.image}
          />
          <input
            type="text"
            name="name"
            id="gameName"
            placeholder="Nome do jogo"
            value={formData.name}
            onChange={handleFormChange}
          />
          <select
            name="plataform"
            id="plataform"
            className="selector-game-options"
            value={formData.platform}
            onChange={{ handleFormChange }}
          >
            <option value="Default">Selecione uma Plataforma</option>
            <option value="Xbox">Xbox</option>
            <option value="Playstation">Playstation</option>
            <option value="Windows">Windows</option>
            <option value="MacOS">MacOS</option>
            <option value="Linux">Linux</option>
          </select>
          <select
            name="genre"
            id="genre"
            className="selector-game-options"
            value={formData.genre}
            onChange={{ handleFormChange }}
          >
            <option value="Default">Selecione um gênero</option>
            <option value="Ação">Ação</option>
            <option value="FPS">FPS</option>
            <option value="RPG">RPG</option>
            <option value="Simulação">Simulação</option>
            <option value="Esportes">Esportes</option>
          </select>
          <input
            type="number"
            name="releaseYaer"
            id="release"
            value={formData.releaseYear}
            placeholder="Selecione o ano de lançamento"
            onChange={{ handleFormChange }}
          />
          <select
            name="language"
            id="language"
            value={formData.language}
            className="selector-game-options"
            onChange={{ handleFormChange }}
          >
            <option value="Default">Selecione o idioma</option>
            <option value="Português">Português do Brasil</option>
            <option value="Inglês">Inglês</option>
            <option value="Francês">Francês</option>
            <option value="Alemão">Alemão</option>
            <option value="Italiano">Italiano</option>
          </select>
          <select
            name="resource"
            id="resource"
            value={formData.resource}
            className="selector-game-options"
            onChange={{ handleFormChange }}
          >
            <option value="Default">Selecione o estilo do jogo</option>
            <option value="Online">Online</option>
            <option value="Single-player">Single-Player</option>
            <option value="Coop">Coop</option>
            <option value="multiplayer">Multiplayer</option>
          </select>
          <select
            name="status"
            id="status"
            value={formData.status}
            className="selector-game-options"
            onChange={{ handleFormChange }}
          >
            <option value="Default">Selecione o status do jogo</option>
            <option value="Iniciado">Iniciado</option>
            <option value="Playstation">10%</option>
            <option value="Windows">20%</option>
            <option value="30%">30%</option>
            <option value="40%">40%</option>
            <option value="50%">50%</option>
            <option value="60%">60%</option>
            <option value="70%">70%</option>
            <option value="80%">80%</option>
            <option value="90%">90%</option>
            <option value="Zerado">Zerado</option>
          </select>
          <input
            type="button"
            name=""
            id="createGame"
            value="Criar"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="existingGameModal">
        <div className="exitBtnExistingModal" onChange={closeModals}>
          <img src="./assets/imgs/close.svg" alt="" className="exit-logo" />
        </div>
        <form className="add-existingGame-form">
          <h2>Escolha um jogo na lista:</h2>
          <select name="game-list" id="game-list">
            <option value="Spider-Man">Spider-Man</option>
            <option value="Call of Duty">Call of Duty</option>
            <option value="Bob Esponja">Bob Esponja</option>
          </select>
          <input
            type="button"
            name="adicionar"
            id="addGame"
            value="ADICIONAR JOGO"
          />
        </form>
      </div>
      <header className="dashboard-header">
        <div className="logo">
          <img src={imgLogo} alt="" className="desktop-logo" />
          <img src={imgMobileLogo} alt="" className="logo-mobile" />
        </div>
        <div className="profile-mobile-way">
          <img src={imgUser} alt="" />
        </div>
      </header>
      <div className="dashboard-content">
        <div className="first-content">
          <div className="options">
            <button id="add-game" onClick={openAddGameModal}>
              ADICIONE SEU JOGO
            </button>
            <Link to="/search-page">
              <button id="detailedSearch">MINHA LISTA DE JOGOS</button>
            </Link>

            <button id="existingGames" onClick={openAddExistingGameModal}>
              ADICIONE JOGO EXISTENTE
            </button>
          </div>
          <div className="game-cover-medium">
            {/*<img src="" alt="Game Cover Medium" />*/}
          </div>
          <span className="selector-dots"></span>
        </div>
        <div className="carousel-bar">
          <p>XBOX</p>
          <div className="games-bar">
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
          </div>
        </div>
        <div className="carousel-bar">
          <p>PLAYSTATION</p>
          <div className="games-bar">
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
          </div>
        </div>
        <div className="poster-apresentation">
          <p>JOGOS COM A MAIOR NOTA</p>
          <div className="apresentation-wrapper">
            <div className="game-large-cover"></div>
            <div className="game-infos">
              <p className="game-name">lorem</p>
              <p className="game-gendre">lorem</p>
              <p className="release-yaer">2012</p>
              <p className="resource">lorem</p>
              <p className="language">lorem</p>
              <div className="stars">******</div>
            </div>
          </div>
        </div>
        <div className="carousel-bar">
          <p>PC</p>
          <div className="games-bar">
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
          </div>
        </div>
        <div className="recently-added">
          <p>Adicionados recentemente</p>
          <div className="recently-added-wrapper">
            <div className="game-extra-large-cover"></div>
            <div className="game-extra-large-cover"></div>
          </div>
        </div>
      </div>
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default Dashboard;
