let digito0 = document.getElementById('0')
let digito1 = document.getElementById('1')
let digito2 = document.getElementById('2')
let digito3 = document.getElementById('3')
let digito4 = document.getElementById('4')
let digito5 = document.getElementById('5')
let digito6 = document.getElementById('6')
let digito7 = document.getElementById('7')
let digito8 = document.getElementById('8')
let digito9 = document.getElementById('9')
let adicao = document.getElementById('+')
let subtracao = document.getElementById('-')
let multiplicacao = document.getElementById('*')
let divisao = document.getElementById('/')

var tela = document.getElementById('tela')
tela.innerText = 'O resultado'

function Somar() {
    var resultado = Number(numero1.value) + Number(numero2.value)
    alert(`O resultado é: ${resultado}`)

    var res = document.getElementById('resultado')
    res.textContent = resultado
    res.innerText = 'O resultado é' + resultado
}

function adicionarDigito(digito) {
    tela.innerText = digito
}

function tela(digitos) {
    
}