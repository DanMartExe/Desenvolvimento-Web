// class Pessoa {
//     _nome
//     _idade

//     constructor(nome, idade) {
//         this._nome = nome
//         this._idade = idade
//     }
// }

// var pessoa = new Pessoa('Fulano', 10)


//Objetos literais em Javascript
var pessoa = {
    nome: 'Fulano',
    idade: 10,
    endereco: 'Rua XPTO',
    numeroCasa: 30,
    telefone: ['111111111111', '55555555555', '777777777'],
    filhos: [
        {
            nome: 'Joaozinho',
            idade: 10
        },
        {
            nome: 'Luizinha',
            idade: 5
        }
    ],

    dizerOla() {
        console.log('Ola')
    }
}

pessoa["Telefone"] = "110000000000"




