let btnAdicionar = document.querySelector("#adicionar");
let btnFinalizar = document.querySelector("#finalizar");
let resultados = document.querySelector(".resultados");

var array = [];

btnAdicionar.addEventListener("click", () => {
    let inputNumeros = document.querySelector("#numeros");
    numero = Number(inputNumeros.value);
    let select = document.querySelector("#select");
    let option = document.createElement("option");
    option.innerHTML = `Valor ${numero} adicionado`;
    if (numero == array[array.indexOf(numero)]) {
        alert("Número já adicionado")
        inputNumeros.style.borderColor = "3px solid red"
    } else if (numero > 9 || numero < 1) {
        alert("Escolha um número de 1 a 10")
        inputNumeros.style.border = "3px solid red"
    } else {
        resultados.innerHTML = null;
        inputNumeros.style.border = "1px solid black"
        array.push(numero);
        select.appendChild(option)
    }
    array.sort();

})

btnFinalizar.addEventListener("click", () => {

    let soma = 0;
    let somaDosNumeros = 0;
    let cadastros = array.length;
    let maiorNumero = array[array.length - 1];

    for (x = 0; x < array.length; x++) {
        soma += array[x]
    }

    somaDosNumeros = soma;

    let media = soma / array.length;
    let resultSoma = document.createElement("p");
    let resultCadastro = document.createElement("p")
    let resultMaiorNumero = document.createElement("p")
    let resultMedia = document.createElement("p")


    resultSoma.innerHTML = `A soma dos números é ${somaDosNumeros}`;
    resultCadastro.innerHTML = `${cadastros} números cadastrados`;
    resultMaiorNumero.innerHTML = `O maior número é ${maiorNumero}`;
    resultMedia.innerHTML = `A média dos números é ${media}`;

    resultados.appendChild(resultCadastro)
    resultados.appendChild(resultMaiorNumero)
    resultados.appendChild(resultSoma)
    resultados.appendChild(resultMedia)
})