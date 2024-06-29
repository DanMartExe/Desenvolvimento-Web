let inputValorBruto = document.getElementById("valor-bruto")
let inputValorLiquido = document.getElementById("valor-liquido")
let botao = document.getElementById("btn-calcular")
let taxa = 200

// inputValorBruto.addEventListener("blur", () => {  
// })

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    inputValorLiquido.value = valorBruto - taxa
})