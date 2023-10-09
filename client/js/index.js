//##################################
//            Variáveis
//##################################
const btn = document.getElementById("register-btn");
const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("#passsword-isEquals");
const spans = document.querySelectorAll(".span-required");

//##################################
//         FUNÇOES E EVENTOS
//##################################

//Evento do botão que recupera os valores do formulário e envia para o banco de dados
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const data = {
    email: emailInput.value,
    name: nameInput.value,
    password: passwordInput.value,
  };
  //Constante que armazena a função assincrona de fetch
  const fetchAPI = async () => {
    const result = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  fetchAPI();

  //Execução do Fetch(Busca)
});
