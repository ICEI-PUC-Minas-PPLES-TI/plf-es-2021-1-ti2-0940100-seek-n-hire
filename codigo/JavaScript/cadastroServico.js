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