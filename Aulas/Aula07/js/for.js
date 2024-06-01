var nomes = ['fulano', 'ciclano', 'teste', 'maria', 'joao']
// console.log(nomes[0])

// for (var i = 0; i < nomes.length; i++) {
//     console.log(nomes[i])
// }

// for (var i in nomes) {
//     console.log(nomes[i])
// }

// nomes.forEach(nome => {
//     console.log(nome)
// })

for (var nome of nomes) {
    console.log(nome)
}