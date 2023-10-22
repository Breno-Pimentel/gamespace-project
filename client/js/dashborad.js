const addGameBtn = document.getElementById("add-game");
const AddGameModal = document.querySelector(".add-game-modal");
const exitBtn = document.querySelector(".exit");

addGameBtn.addEventListener("click", (e) => {
  e.preventDefault();

  AddGameModal.style.display = "block";
});

exitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  AddGameModal.style.display = "none";
});
