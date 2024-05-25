// Arrays/Listas/Vetores
// Arrays se assemelham com banco de dados
// Um array deve ser capaz de: Adicionar, Remover, Buscar/Listar, Atualizar

//var nome = 'fulano' // variavel simples
var nomes = ['Miguel', 'Mateus', 'Monica'] //variavel composta (array)
// var idades = new Array()

console.log(nomes)
//console.log(idades)
// console.log(nomes[0]) //Acessa posição 0 - Miguel
// console.log(nomes[1])
// console.log(nomes[2])

nomes.push('Davi', 'Fulano', 'Ciclano') // Adiciona elemento no array
console.log(nomes)

console.log(nomes.length) // Tamanho do array

nomes.pop() // por padrão remove o ultimo elemento do array
console.log(nomes)

nomes.reverse() // inverte meu array
console.log(nomes)

nomes.shift() // por padrão remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena o array
console.log(nomes)

var posicaoCiclano = nomes.indexOf('Ciclano') // Busca por indice o elemento do parametro
nomes[posicaoCiclano] = 'Fulano' //atualiza o valor
nomes.splice(posicaoCiclano, 1) // primeiro parametro é a posiçao do item a ser removido, o segundo é a quantidade de elementos excluidos
var array = [true, 'teste', 10, NaN, undefined, , , , , , 'teste2']