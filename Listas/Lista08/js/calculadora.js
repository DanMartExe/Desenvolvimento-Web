let digitos = document.getElementById('digitos')
let tela = document.getElementById('tela')
let valorAtualizado = ''

for (let indiceDigito = 0; indiceDigito <= 9; indiceDigito++) {
    let botaoDigito = document.createElement('button')
    botaoDigito.textContent = indiceDigito
    botaoDigito.value = indiceDigito
    botaoDigito.id = `btn-${indiceDigito}`

    botaoDigito.addEventListener('click', (evento) => {
        valorAtualizado += evento.target.value
        tela.textContent = valorAtualizado
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
    valorAtualizado += evento.target.value
    tela.textContent = valorAtualizado
})

document.getElementById('btn-soma').addEventListener('click', (evento) => {
    valorAtualizado += evento.target.value
    tela.textContent = valorAtualizado
})

document.getElementById('btn-sub').addEventListener('click', (evento) => {
    valorAtualizado += evento.target.value
    tela.textContent = valorAtualizado
})

document.getElementById('btn-mult').addEventListener('click', (evento) => {
    valorAtualizado += evento.target.value
    tela.textContent = valorAtualizado
})

document.getElementById('btn-div').addEventListener('click', (evento) => {
    valorAtualizado += evento.target.value
    tela.textContent = valorAtualizado
})

document.getElementById('btn-result').addEventListener('click', (evento) => {
    tela.textContent = "Resultado: " + eval(valorAtualizado)
    valorAtualizado = eval(valorAtualizado)
})

let botaoLimpar = document.createElement('button')
botaoLimpar.id = 'btn-limpar'
botaoLimpar.textContent = 'C'
digitos.appendChild(botaoLimpar)

document.getElementById('btn-limpar').addEventListener('click', (evento) => {
    valorAtualizado = ''
    tela.textContent = ''
})