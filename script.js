let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    console.log(quantidadeTotalCarne);

    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    console.log(quantidadeTotalCerveja);

    let quantidadeTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);
    console.log(quantidadeTotalCerveja);

    resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000} kg de Carne<p>`
    resultado.innerHTML += `<p>${quantidadeTotalCerveja / 1000} L de Cerveja<p>`
    resultado.innerHTML += `<p>${quantidadeTotalBebidas / 1000} L de Bebidas<p>`

}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else {
        return 1500;
    }
}
