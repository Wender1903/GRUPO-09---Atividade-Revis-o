
let botaoCalcular = document.getElementById("calcularIMC")

function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function verificarCategoria(imc) {
    let categoriaResultado = document.createElement('p')
    if (imc < 18.5) {
        categoriaResultado.textContent = 'Abaixo do Peso'
        categoriaResultado.classList.add("abaixo-peso")
    } else if (imc < 25) {
        categoriaResultado.textContent = "Peso Normal"
        categoriaResultado.classList.add("peso-normal")

    } else if (imc < 30) {
        categoriaResultado.textContent = "Sobrepeso"
        categoriaResultado.classList.add("sobrepeso")

    } else {
        categoriaResultado.textContent = "Obesidade"
        categoriaResultado.classList.add("obesidade")
    }
    return categoriaResultado
}

function exibirResultado(imc, categoria) {
    let sectionResultado = document.querySelector('.resultado-imc-exibicao')
    sectionResultado.innerHTML = `<h2>Seu imc é: <b class="${categoria.classList}">${imc}<b></h2> `
    sectionResultado.appendChild(categoria)
}

botaoCalcular.addEventListener("click", (evento) => {
    evento.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let imc = calcularIMC(peso, altura)
    let categoria = verificarCategoria(imc)
    exibirResultado(imc, categoria)

})


