function MostraOpcoes() {
    console.log(document.getElementById("atuacao").value);
    if (document.getElementById("atuacao").value == '0') {
        document.getElementById('Dia').style.display = "block";
        document.getElementsByClassName('admin')[0].style.display = "none";
        document.getElementsByClassName('educacao')[0].style.display = "none";
        document.getElementsByClassName('casa')[0].style.display = "none";
    }
    if (document.getElementById("atuacao").value == '1') {
        document.getElementById('Dia').style.display = "none";
        document.getElementsByClassName('admin')[0].style.display = "block";
        document.getElementsByClassName('educacao')[0].style.display = "none";
        document.getElementsByClassName('casa')[0].style.display = "none";
    }
    if (document.getElementById("atuacao").value == '2') {
        document.getElementById('Dia').style.display = "none";
        document.getElementsByClassName('admin')[0].style.display = "none";
        document.getElementsByClassName('educacao')[0].style.display = "block";
        document.getElementsByClassName('casa')[0].style.display = "none";
    }
    if (document.getElementById("atuacao").value == '3') {
        document.getElementById('Dia').style.display = "none";
        document.getElementsByClassName('admin')[0].style.display = "none";
        document.getElementsByClassName('educacao')[0].style.display = "none";
        document.getElementsByClassName('casa')[0].style.display = "block";
    }
}
const createService = (service) => {
    axios.post('http://localhost:3000/insertService', service)
        .then(response => {
            const addedService = response.data;
            window.location.href = "index.html";
        })
        .catch(error => alert(error));
};

function salvarServico() {
    const servico = {};
    servico.campoServico = saveOptions();
    servico.areaServico = saveService();
    servico.taxaServico = saveTaxa();
    servico.diasServico = verificaData();
    servico.horarioServico = verificaHora();
    servico.cpf = localStorage.getItem("cpf");
    createService(servico);
}


function saveTaxa() {
    if (document.querySelector('#taxa') != null) {
        const getTaxa = document.querySelector('#taxa');
        const taxa = Number(getTaxa.value);
        if (!taxa || taxa < 0) {
            if (taxa != null) {
                alert('A taxa deve ter valor numérico');
                return;
            } else {
                alert('A taxa deve ser maior que zero');
                return;
            }
        }
        return getTaxa;
    }
}

function verificaData() {
    let salvaData = document.querySelector('#data');
    salvaData = salvaData.value;
    let data = new Date(salvaData);
    console.log(`DATA ${data.getDate() + 1} ${data.getMonth() + 1} ${data.getFullYear()}`)
    return salvaData;
}
function verificaHora() {
    let salvaHorario = document.querySelector('#tempo');
    salvaHorario = salvaHorario.value;
    console.log(`HORARIO ${salvaHorario}`);
    return salvaHorario;
}



function verificaRegiao() {
    if (document.querySelector("#regiao") != null) {
        const getRegiao = document.querySelector("#regiao");
        const regiao = getRegiao.value;
        if (typeof (regiao) == Number || !regiao) {
            alert('Preencha a região corretamente')
            return;
        }
        console.log(`REGIAO ${regiao}`)
    }
}

// function verificaDadosNulos() {
//     console.log('teste')
//     if (document.querySelector("#taxa").value == null) {
//         alert('teste')
//     }
// }

function saveService() {
    if (document.querySelector('#Dia') != null) {
        const getDia = document.querySelector('#Dia').value;
        console.log(`Dia ${getDia}`);
    }
    if (document.querySelector('#admin') != null) {
        const getAdmin = document.querySelector('#admin').value;
        console.log(`admin ${getAdmin}`);
    }
    if (document.querySelector('#educacao') != null) {
        const getEducacao = document.querySelector('#educacao').value;
        console.log(`educacao ${getEducacao}`);
    }
    if (document.querySelector('#casa') != null) {
        const getCasa = document.querySelector('#casa').value;
        console.log(`casa ${getCasa}`);
    }
}
function saveOptions() {
    const getOption = document.querySelector('#atuacao').value;
    return getOption;
}
