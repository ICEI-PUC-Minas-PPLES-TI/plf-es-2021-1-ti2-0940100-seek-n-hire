function getService(){
    let nome = document.querySelector('#service');
    nome = nome.innerHTML;
    localStorage.setItem("name", nome);
    window.location.href = "escolha.html";
}