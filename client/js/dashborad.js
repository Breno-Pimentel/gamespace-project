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

  async function createGameFetch() {
    const data = {
      img: imageGame.value,
      name: Gamename.value,
      plataform: plataform.value,
      genre: genre.value,
      releaseYear: release.value,
      language: language.value,
      resource: resource.value,
      gameStatus: gameStatus.value,
    };
    try {
      const result = await fetch("http://localhost:3000/create/game", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
      console.log(data);
    }
  }
  createGameFetch();
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
