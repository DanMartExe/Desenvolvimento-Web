let inputValorBruto = document.getElementById("valor-bruto")
let inputValorIR = document.getElementById("valor-ir")
let inputValorLiquido = document.getElementById("valor-liquido")
let botao = document.getElementById("btn-calcular")
let taxa = 0.15

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    inputValorIR.value = valorBruto * taxa
    inputValorLiquido.value = valorBruto - (valorBruto * taxa)

})