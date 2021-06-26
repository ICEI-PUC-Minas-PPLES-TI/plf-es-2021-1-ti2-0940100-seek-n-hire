const createUser = () => {
    let nameService = localStorage.getItem("name");
    let card = document.getElementById("cardContainer");
    let texto = '';
    axios.post('http://localhost:3000/getService', nameService)
        .then(response => {
            const service = response.data;
            console.log(service);
            for (let i = 0; i < service.length; i++) {
                texto +=
                    `   
                        <div class="d-flex">
                        <div class="fa-2x user">
                            <i class="far fa-user"></i>
                        </div>
                        <div class="m-2">
                            <h3>${service.areaServico}</h3>
                            <p>${service.name}</p>
                        </div>                                    
                    </div>
                    <div class="price d-flex flex-column justify-content-end">
                        <h3>${service.taxaServico}</h3>
                    </div>   
                    `
            }
            card.innerHTML = texto;
        })
        .catch(error => {
            console.log(error);
        });
    
}
function create(){
    createUser();
}
function Avancar(){
    window.location.href = "pagamento.html";
}
