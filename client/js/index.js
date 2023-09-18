//##################################
//            Variáveis
//##################################
const btn = document.getElementById("btn");
const registerForm = document.getElementById("register-form");
const emailInput = document.querySelector(".email-user-input");
const passwordInput = document.querySelector("#password-user-input");
const passwordConfirm = document.querySelector("#passsword-isEquals");
const spans = document.querySelectorAll(".span-required");

//##################################
//         FUNÇOES E EVENTOS
//##################################

//Evento do botão que recupera os valores do formulário e envia para o banco de dados
btn.addEventListener("click", function (e) {
  e.preventDefault();

  function isPasswordTheSame() {
    if (passwordInput.value === passwordConfirm.value) {
      return true;
    } else {
      return false;
    }
  }
  isPasswordTheSame();
  //Instanciando a clase formData
  const formaData = new FormData(registerForm);

  //trasnforma tudo em um objeto(JSON)
  const data = Object.fromEntries(formaData);

  if (isPasswordTheSame() === true) {
    //Constante que armazena a função assincrona de fetch
    const fetchAPI = async () => {
      const result = await fetch("http://localhost:3000/users", {
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
  } else {
    
  }
  //Execução do Fetch(Busca)
});
