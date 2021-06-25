const createUser = (user) => {
    axios.post('http://localhost:3000/getOneUser', user)
        .then(response => {
            const addedUser = response.data;
            window.location.href('/index.html');
        })
        .catch(error => alert("Usuário ou senha inválidos"));
};
function Login(){
    const findUser = {};
    findUser.senha = saveSenha();
    findUser.login = saveLogin();
    createUser(findUser);
}
function saveSenha(){
    const senha = document.querySelector('#password').value;
    return senha;
}

function saveLogin() {
    const login = document.querySelector('#login').value;
    return login;
}