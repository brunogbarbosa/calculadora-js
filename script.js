document.querySelector(".botao");
document.querySelector(".resultado")


function insert(num) {
    
    let numero = document.querySelector(".resultado").innerHTML;
    document.querySelector(".resultado").innerHTML = numero + num;
}

function limparCalc() {
    document.querySelector(".resultado").innerHTML = "";
    
}

function back() {
    let resultado = document.querySelector(".resultado").innerHTML;
    document.querySelector(".resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let calc = document.querySelector(".resultado").innerHTML;

    if (calc) {
        document.querySelector(".resultado").innerHTML = eval(calc);
     }
}