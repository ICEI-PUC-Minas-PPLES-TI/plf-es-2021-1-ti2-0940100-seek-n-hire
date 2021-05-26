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

    //const getRegiao = document.querySelector("#regiao");
    const getAtuacao = document.querySelector('#atuacao');
    //const getDia = document.querySelector('#Dia');
    const getData = document.querySelector('#data');
    const getTempo = document.querySelector('#tempo');
    if (getAtuacao != null) {
        var atuacao = getAtuacao.value;
        console.log(atuacao)
    }
    if (document.querySelector('#taxa') != null) {
        const getTaxa = document.querySelector('#taxa');
        const taxa = Number(getTaxa.value);
        console.log(taxa);
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
    if (document.querySelector("#regiao") != null) {
        const getRegiao = document.querySelector("#regiao");
        const regiao = String(getRegiao.value);
        if (!regiao) {
            alert('A região deve conter apenas letras')
            return;
        }
        if (regiao == null) {
            alert('Favor preencher a região')
            return;
        }
        console.log(regiao);
    }


    if (document.querySelector('#Dia') != null) {
        const getDia = document.querySelector('#Dia');
        const dia = getDia.value;
        console.log(dia);
    }
}

salvaDados();