const tela = document.querySelector(".tela-calculadora p");
const ultimaOperacao = document.querySelector("#numero-ultima-operacao");
const teclas = document.querySelectorAll(".tecla");
const teclaX = document.querySelector(".tecla-x");
const limpaTudo = document.querySelector("#limpa-tudo");
const apagaUm = document.querySelector("#apaga");
const operadorIgual = document.querySelector("#operador-igual");

teclas.forEach(element => {
    element.addEventListener("click", function(event) {
        tela.textContent += event.target.textContent;
    })
});

limpaTudo.addEventListener("click", function() {
    tela.textContent = "";
});

apagaUm.addEventListener("click", function() {
    var str = tela.textContent;
    tela.textContent = str.substr(0, str.length - 1);
});

operadorIgual.addEventListener("click", function() {
    var str = tela.textContent;
    ultimaOperacao.innerHTML = str;
    tela.textContent = eval(str);
});

teclaX.addEventListener("click", function() {
    tela.textContent += "*";
});