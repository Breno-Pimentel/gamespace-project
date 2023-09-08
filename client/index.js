// //Selecionando o butão no documento html
// const btn = document.querySelector('#btn');

const registerForm = document.getElementById("register-form")

//Evento do botão que recupera o valor do input
btn.addEventListener('click', function (e) {

    e.preventDefault();

    // const name = document.querySelector('#nome-user-input').value;
    // const userEmail = document.querySelector('#email-user-input').value;
    // const userPassword = document.querySelector('#password-user-input').value;

    // const user = {
    //     name: name,
    //     email: userEmail,
    //     password: userPassword
    // }
    // console.log(user)

    //Instanciando a clase formData
    const formaData = new FormData(registerForm);

    //trasnforma tudo em um objeto(JSON)
    const data = Object.fromEntries(formaData);

    //Constante que armazena a função assincrona de fetch
    const  fetchAPI = async () => {
        const result = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        }).then((response => response.json())).then((data) => console.log(data))
            
    }
    //Execução do Fetch(Busca)
    fetchAPI();
})