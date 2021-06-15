let valido;
function Validation(){
    var name = document.getElementById('name-input').value;
    if(name.length < 5 && name.indexOf(' ') < 0){
        valido = false;
        document.getElementById('name').style.display = "block";
    }else{
        valido = true;
        document.getElementById('name').style.display = "none";
    }
    if (validateCPF(cpf = document.getElementById('cpf-input').value) == true) {
        valido = true;
        document.getElementById('cpf').style.display = "none";
    }else{
        valido = false;
        document.getElementById('cpf').style.display = "block";
    }if(document.getElementById('password_input').value.length < 7){
        document.getElementById('password').style.display = "block";
    }else{
        document.getElementById('password').style.display = "none";
    }
}
function SenhaIgual(){
    if( document.getElementById('password_cofirmation_input').value == document.getElementById('password_input').value){
        document.getElementById('password-cofirmation').style.display = "none";
    }else{
        document.getElementById('password-cofirmation').style.display = "block";
    }
}
function validateCPF(cpf){
    cpf.replace(/[^0-9]/g, '');
    if (cpf.length !== 11) {
      return false;
    }
    const rcpf1 = cpf.substring(0, 9);
    const rcpf2 = cpf.substring(9);
    let d1 = 0;
    for (let i = 0; i < 9; i++) {
      d1 += parseInt(rcpf1.substring(i, i + 1)) * (10 - i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) {
      d1 = 0;
    }
    if (parseInt(rcpf2.substring(0, 1)) !== d1) {
        return false;
    }
    d1 *= 2;
    for (let j = 0; j < 9; j++) {
      d1 += parseInt(rcpf1.substring(j, j + 1) + '') * (11 - j);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) {
      d1 = 0;
    }
    if (parseInt(rcpf2.substring(1, 2) + '') !== d1) {
        return false;
    }
    if (parseInt(cpf) - parseInt(Array(12).join(cpf[0])) === 0) {
        return false;
    }
    return true;
  }

  function validaCep () {
    const form = document.querySelector('#login-form');

 
        let getCep = form.querySelector('#zipcode')
        let cep = Number(getCep.value);
        let getRua = form.querySelector('#street')
        let rua = getRua.value;
        let getCidade = form.querySelector('#city')
        let cidade = getCidade.value;
        let getEstado = form.querySelector('#state')
        let estado = getEstado.value;
        console.log(cep);
        var url = `http://viacep.com.br/ws/${cep}/json/`
        console.log(url)
        fetch(url, {method: 'GET'}).then (response => {
            response.json().then(dados => {
                getRua.value = dados.logradouro;
                getCidade.value = dados.localidade;
                getEstado.value = dados.uf
            })
        }) 
        if (!cep) {
            alert('CEP inválido.');
            return;
        }
}   

function saveName (){
    const name = document.querySelector('#name-input').value;
    console.log(`nome: ${name}`);
    return name;
}

function saveBirthdate() {
    const birthdate = document.querySelector('#birthdate').value;  
    console.log(`data: ${date}`)
    return birthdate;
}

function saveAdditionalAdressInfo() {
    const additionalAdressInfo = document.querySelector('#additional-address-info').value;  
    console.log(`complemento: ${additionalAdressInfo}`)
    return additionalAdressInfo;
}

function saveEmail() {
    const email = document.querySelector('#email').value;
    console.log(`email: ${email}`);
    return email;
}

