function MostraOptions() {
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


function salvaDados() {
    const getAtuacao = document.querySelector('#atuacao');
    if (getAtuacao != null) {
        var atuacao = getAtuacao.value;
        console.log(`atuacao ${atuacao}`)
    }
    if (document.querySelector('#Dia') != null) {
        const getDia = document.querySelector('#Dia');
        const dia = getDia.value;
        console.log(`Dia ${dia}`)
    }
    if (document.querySelector('.admin') != null) {
        const getAdmin = document.querySelector('.admin');
        const admin = getAdmin.value;
        console.log(`admin ${admin}`)
    }
    if (document.querySelector('.educacao') != null) {
        const getEducacao = document.querySelector('.educacao');
        const educacao = getEducacao.value;
        console.log(`educacao ${educacao}`)
    }
    if (document.querySelector('.casa') != null) {
        const getCasa = document.querySelector('.casa');
        const casa = getCasa.value;
        console.log(`casa ${casa}`)
    }
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
        console.log(taxa);
    }
    
    
}

function verificaData(){
    let salvaData = document.querySelector('#data')
    salvaData = salvaData.value;
    let data = new Date (salvaData);
    console.log(`DATA ${data.getDate()+1} ${data.getMonth()+1} ${data.getFullYear()}`)
}
function verificaHora(){
    let salvaHorario = document.querySelector('#tempo')
    salvaHorario = salvaHorario.value;
    console.log(`HORARIO ${salvaHorario}`);
}



function verificaRegiao() {
    if (document.querySelector("#regiao") != null) {
        const getRegiao = document.querySelector("#regiao");
        const regiao = getRegiao.value;
        if (typeof(regiao) == Number || !regiao) {
            alert('Preencha a região corretamente')
            return;
        }
    console.log(`REGIAO ${regiao}`);
    }
}


function verificaDadosNulos() {
    const getRegiao = document.querySelector("#regiao");
    const regiao = String(getRegiao.value);
    const getTaxa = document.querySelector('#taxa');
    const taxa = Number(getTaxa.value);
    if (regiao == null) {
        alert('Favor preencher a região')
        if (!taxa) {
            alert ('Favor preencher a taxa')
        }
    }
}
salvaDados();
