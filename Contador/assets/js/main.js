var cont = document.getElementById("numero");
var numero = 0;

function aumentar(){
    numero++;
    cont.innerHTML = numero;
}

function diminuir(){
    numero--;
    cont.innerHTML = numero;
}