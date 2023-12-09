const addGameBtn = document.getElementById("add-game");
const AddGameModal = document.querySelector(".add-game-modal");
const addExistingGamebtn = document.getElementById("existingGames");
const addExistingGameModal = document.querySelector(".existingGameModal");
const exitBtn = document.querySelector(".exit");
const exitBtnExistingModal = document.querySelector(".exitBtnExistingModal");

const createGame = document.getElementById("createGame");
const imageGame = document.getElementById("image-game-file");
const Gamename = document.getElementById("gameName");
const plataform = document.querySelector("#plataform");
const genre = document.querySelector("#genre");
const release = document.querySelector("#release");
const language = document.querySelector("#language");
const resource = document.querySelector("#resource");
const gameStatus = document.querySelector("#status");

addGameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  AddGameModal.style.display = "block";
});

addExistingGamebtn.addEventListener("click", (e) => {
  e.preventDefault();
  addExistingGameModal.style.display = "block";
});

createGame.addEventListener("click", (e) => {
  e.preventDefault();

  // Função para enviar a foto primeiro
  async function uploadImage() {
    const formData = new FormData();
    formData.append("img", imageGame.files[0]);

    try {
      const result = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Image upload result:", data);
          // Depois de enviar a imagem, chame a função para enviar os dados do usuário
          createGameFetch();
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  // Função para enviar os dados do usuário
  async function createGameFetch() {
    const data = {
      name: Gamename.value,
      plataform: plataform.value,
      genre: genre.value,
      releaseYear: release.value,
      language: language.value,
      resource: resource.value,
      gameStatus: gameStatus.value,
    };
// Meu povo e minha pova!!
    try {
      const result = await fetch("http://www.prestecinfo.com.br:3000/create/game", {
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
  }

  // Chama a função para enviar a foto primeiro
  uploadImage();
});

exitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  AddGameModal.style.display = "none";
  addExistingGameModal.style.display = "none";
});

exitBtnExistingModal.addEventListener("click", (e) => {
  e.preventDefault();
  addExistingGameModal.style.display = "none";
});
//#