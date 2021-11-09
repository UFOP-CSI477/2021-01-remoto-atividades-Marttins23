const radiosTipoPix = document.querySelectorAll(".tipo-pix");
const radiosTipoChave = document.querySelectorAll('input[name="tipo-chave"]');
const bancos = document.querySelectorAll(".select-banco");
const inputChave = document.querySelector("#input-chave");
const inputValor = document.querySelector("#input-valor");
const formulario = document.querySelector("form");
const resFinal = document.querySelector("#resultado-final");

var bancoEnvio = "";
var bancoRecebimento = "";
var valorTotalEnvios = 0;
var valorTotalRecebimentos = 0;


function limparSelect(campo) {
    while( campo.length > 1 ) {
        campo.remove(1);
    }
}

function preencherSelectBancos(data) {

    bancos.forEach(element => {
        limparSelect(element);

        for( let index in data ) {
            
            const { fullName, ispb } = data[index];
    
            let option = document.createElement("option");
            option.value = fullName;
            option.innerHTML = `${fullName} - ${ispb}`;
    
            element.appendChild(option);

            element.setAttribute("disabled", "disabled");
    
        } 
    });

}

function carregarBancos() {

    fetch("https://brasilapi.com.br/api/banks/v1")
        .then(response => response.json())
        .then(data => preencherSelectBancos(data))
        .catch(error => console.error(error))

}

function capturaNomeDoBanco(event) {

    const banco_index = event.target.selectedIndex;
    const nome_banco = event.target.options[ banco_index ].value;

    if ( nome_banco == "" ) {
       if(event.target.id == "banco-origem") {
           bancoEnvio = "";
       } else {
           bancoRecebimento = "";
       }
    } else {
        if(event.target.id == "banco-origem") {
            bancoEnvio = nome_banco;
        } else {
            bancoRecebimento = nome_banco;
        }
    }

}

function liberaBancoOrigemEDestino() {

    bancos.forEach(element => {
        element.removeAttribute("disabled");
    });

    inputValor.removeAttribute("disabled");

}

function liberaBancoOrigem() {

    bancos.forEach(element => {
        if(element.id == "banco-origem") {
            element.removeAttribute("disabled");
        } else {
            element.setAttribute("disabled", "disabled");
        }   
    });

    inputValor.removeAttribute("disabled");

}

function liberaInputChave() {

    inputChave.removeAttribute("disabled");

}

function adicionaPixNaTabela(pix) {
    var pixTr = montaTr(pix);
    var tabela = document.querySelector("#tabela-pix");
    tabela.appendChild(pixTr);
}

function retornaTipoPix() {

    let valueTipoPix = "";

    radiosTipoPix.forEach(element => {
        if(element.checked) {
            valueTipoPix = element.value;
        }
    });

    return valueTipoPix;
}

function retornaTipoChavePix() {

    let valueTipoChave = "";

    radiosTipoChave.forEach(element => {
        if(element.checked) {
            valueTipoChave = element.value;
        }
    });

    return valueTipoChave;

}

function computarPix() {

    var pix = {
        "tipoPix": retornaTipoPix(),
        "tipoChave": `${retornaTipoChavePix()} - ${inputChave.value}`,
        "bancoEnvio": bancoEnvio,
        "bancoRecebimento": bancoRecebimento,
        "valor": inputValor.value,
    }

    if(!verificaInputsPix(pix)) {
        return;
    }

    atualizaResumoPix(pix);

    adicionaPixNaTabela(pix);

    formulario.reset();

}

function montaTr(pix) {

    var pixTr = document.createElement("tr");
    pixTr.classList.add("pix");

    pixTr.appendChild(montaTd(pix.tipoPix));
    pixTr.appendChild(montaTd(pix.tipoChave));
    pixTr.appendChild(montaTd(pix.bancoEnvio));
    pixTr.appendChild(montaTd(pix.bancoRecebimento));
    pixTr.appendChild(montaTd(pix.valor));

    return pixTr;
}

function montaTd(dado) {

    var td = document.createElement("td");
    td.textContent = dado;

    return td;

}

function verificaInputsPix(pix) {

    if(pix.tipoPix == "") {
        window.alert("É preciso selecionar o tipo de Pix!");
        return false;
    }

    if(pix.valor == "") {
        window.alert("É preciso informar o valor da transação a ser realizada!");
        return false;
    }

    if(pix.valor.includes(",")) {
        window.alert("O separador de casaas decimais deve ser o ponto ( . )");
        return false;
    }

    if(isNaN(pix.valor) || pix.valor < 0) {
        window.alert("Informe um valor maior que zero, composto somente por números");
        return false;
    }

    if(retornaTipoChavePix() == "") {
        window.alert("É preciso selecionar o tipo de Chave Pix a ser utilizada!");
        return false;
    }

    if(inputChave.value == "") {
        window.alert("É preciso informar o valor da Chave Pix a ser utilizada!");
        return false;
    }

    if(pix.tipoPix == "Enviar") {
        if(pix.bancoEnvio == "") {
            window.alert("É preciso selecionar o banco de origem!");
            return false;
        }
        if(pix.bancoRecebimento == "") {
            window.alert("É preciso selecionar o banco de destino!");
            return false;
        }
    } else {
        pix.bancoRecebimento = "Não se Aplica";
        if(pix.bancoEnvio == "") {
            window.alert("É preciso selecionar o banco de origem!");
            return flase;
        }
    }

    return true;

}

function atualizaResumoPix(pix) {

    if(pix.tipoPix == "Enviar") {
        valorTotalEnvios += parseFloat(inputValor.value);
    } else {
        valorTotalRecebimentos += parseFloat(inputValor.value);
    }


}

function resumoPix() {

    resFinal.textContent = `Total de Envios: R$${valorTotalEnvios}\nTotal de Recebimentos: R$${valorTotalRecebimentos}\nSaldo Final: R$${valorTotalRecebimentos - valorTotalEnvios}`;

}