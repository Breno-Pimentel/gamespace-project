const plataformName = document.getElementById('plataformName')
const createBTN = document.getElementById("CreatePlataform")

const data = {
    plataform: plataformName
}

createBTN.addEventListener('click', (e) =>{
    e.preventDefault();

    const data = {
        name: plataformName.value
    }


    try{
        const fetchAPI = async () => {
            const result = await fetch("http://localhost:3000/create/plataform", {
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

    }catch(err){
        console.error(err)
    }
})