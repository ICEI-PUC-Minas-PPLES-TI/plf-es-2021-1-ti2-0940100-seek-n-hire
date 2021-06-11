function mostrar(){
    if(document.getElementsByName("payment")[0].checked){
        document.getElementsByClassName("dadosCard")[0].style.display = "block";
        document.getElementsByClassName("options")[0].style.display = "none";
    }
    if(document.getElementsByName("payment")[1].checked){
        document.getElementsByClassName("options")[0].style.display = "block";
        document.getElementsByClassName("dadosCard")[0].style.display = "none";
        if(document.getElementsByName("modo")[0].checked){
            document.getElementsByClassName("troco")[0].style.display = "block";
        }else{
            document.getElementsByClassName("troco")[0].style.display = "none";
        }
    }
}