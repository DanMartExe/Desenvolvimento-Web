import { somar, subtrair, multiplicar, dividir } from "./operacoes_web.js"

let numero1 = document.getElementById("n1")
let numero2 = document.getElementById("n2")
let botaoSomar = document.getElementById("btnSomar")
let botaoSubtrair = document.getElementById("btnSubtrair")
let botaoMultiplicar = document.getElementById("btnMultiplicar")
let botaoDividir = document.getElementById("btnDividir")

botaoSomar.addEventListener("click", () => {
    alert(somar(
        Number(numero1.value),
        Number(numero2.value)
    ))
})
botaoSubtrair.addEventListener("click", () => {
    alert(subtrair(
        Number(numero1.value),
        Number(numero2.value)
    ))
})
botaoMultiplicar.addEventListener("click", () => {
    alert(multiplicar(
        Number(numero1.value),
        Number(numero2.value)
    ))
})
botaoDividir.addEventListener("click", () => {
    alert(dividir(
        Number(numero1.value),
        Number(numero2.value)
    ))
})