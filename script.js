let btnAdicionar = document.querySelector("#adicionar");
let btnFinalizar = document.querySelector("#finalizar");
let resultados = document.querySelector(".resultados");
// @yangomes010
var array = [];

btnAdicionar.addEventListener("click", () => {
    // Pegar elementos necessarios
    let inputNumeros = document.querySelector("#numeros");
    numero = Number(inputNumeros.value);
    let select = document.querySelector("#select");
    let option = document.createElement("option");

    // Criando o option
    option.innerHTML = `Valor ${numero} adicionado`;


    // Validando o option
    if (numero == array[array.indexOf(numero)]) {
        alert("Número já adicionado")
        inputNumeros.style.borderColor = "3px solid red"
    } else if (numero > 1000 || numero < 1 || numero == 0) {
        alert("Escolha um número de 1 a 1000")
        inputNumeros.style.border = "3px solid red"
    } else {

        // Inserindo o option na tela
        resultados.innerHTML = null;
        inputNumeros.style.border = "1px solid black"
        array.push(numero);
        select.appendChild(option)
        option.selected;
    }

    //Organizando o array em ordem crescente
    array.sort();

})

btnFinalizar.addEventListener("click", () => {
    //Desligando botão 


    btnFinalizar.setAttribute("disabled", "disabled")

    // iniciando as variaveis para imprimir na tela
    let soma = 0;
    let somaDosNumeros = 0;
    let cadastros = array.length;
    let maiorNumero = array[array.length - 1];

    // Recebendo os valores do array
    for (x = 0; x < array.length; x++) {
        soma += array[x]
    }

    somaDosNumeros = soma;

    // Criando os elementos dos resultados
    let media = soma / array.length;
    let resultSoma = document.createElement("p");
    let resultCadastro = document.createElement("p")
    let resultMaiorNumero = document.createElement("p")
    let resultMedia = document.createElement("p")

    // Inserindo html nos paragrafos
    resultSoma.innerHTML = `A soma dos números é ${somaDosNumeros}`;
    resultCadastro.innerHTML = `${cadastros} números cadastrados`;
    resultMaiorNumero.innerHTML = `O maior número é ${maiorNumero}`;
    resultMedia.innerHTML = `A média dos números é ${media}`;

    // Imprimindo na tela
    resultados.appendChild(resultCadastro)
    resultados.appendChild(resultMaiorNumero)
    resultados.appendChild(resultSoma)
    resultados.appendChild(resultMedia)
})