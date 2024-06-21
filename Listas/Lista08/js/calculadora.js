let digitos = document.getElementById('digitos')
let tela = document.getElementById('tela')
let numeroDigitado = ''

for (let indiceDigito = 0; indiceDigito <= 9; indiceDigito++) {
    let botaoDigito = document.createElement('button')
    botaoDigito.textContent = indiceDigito
    botaoDigito.value = indiceDigito
    botaoDigito.id = `btn-${indiceDigito}`

    botaoDigito.addEventListener('click', (evento) => {
        numeroDigitado += evento.target.value
        tela.textContent = numeroDigitado
    })

    digitos.appendChild(botaoDigito)
}

let criarBotaoOperador = (id, valor) => {
    let botaoOperador = document.createElement('button')
    botaoOperador.id = id
    botaoOperador.value = valor
    botaoOperador.textContent = valor

    digitos.appendChild(botaoOperador)
}

criarBotaoOperador('btn-ponto', '.')
criarBotaoOperador('btn-soma', '+')
criarBotaoOperador('btn-sub', '-')
criarBotaoOperador('btn-mult', '*')
criarBotaoOperador('btn-div', '/')
criarBotaoOperador('btn-result', '=')

document.getElementById('btn-ponto').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    tela.textContent = numeroDigitado
})

document.getElementById('btn-soma').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    tela.textContent = numeroDigitado
})

document.getElementById('btn-sub').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    tela.textContent = numeroDigitado
})

document.getElementById('btn-mult').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    tela.textContent = numeroDigitado
})

document.getElementById('btn-div').addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    tela.textContent = numeroDigitado
})

document.getElementById('btn-result').addEventListener('click', (evento) => {
    tela.textContent = "Resultado: " + eval(numeroDigitado)
    numeroDigitado = ''
})

let botaoLimpar = document.createElement('button')
botaoLimpar.id = 'btn-limpar'
botaoLimpar.textContent = 'C'
digitos.appendChild(botaoLimpar)

document.getElementById('btn-limpar').addEventListener('click', (evento) => {
    numeroDigitado = ''
    tela.textContent = ''
})