let valido;
function Validation(){
    var name = document.getElementById('name-input').value;
    if(name.length < 5 && name.indexOf(' ') < 0){
        valido = false;
        document.getElementById('name').style.display = "block";
    }else{
        valido = false;
        document.getElementById('name').style.display = "none";
    }
    if (validateCPF() == true) {
        document.getElementById('cpf').style.display = "none";
    }

}
function validateCPF(){
    cpf = document.getElementById('cpf-input').value;
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
