var dados = [
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste Item 1",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    },
    {
        imagem: "https://via.placeholder.com/150",
        nome: "Teste",
        descricao: "Teste",
        preco: 100
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produtos of dados) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"
    conteudoPrincipal.appendChild(conteudoProduto)

    var imagem = document.createElement('img')
    imagem.src = "https://via.placeholder.com/200x150"
    conteudoProduto.appendChild(imagem)

    var nome = document.createElement('h2')
    nome.textContent = produtos.nome
    conteudoProduto.appendChild(nome)

    var descricao = document.createElement('p')
    descricao.textContent = produtos.descricao
    conteudoProduto.appendChild(descricao)

    var preco = document.createElement('p')
    preco.textContent = `R$ ${produtos.preco}`
    conteudoProduto.appendChild(preco)

    var botoes = document.createElement('div')
    botoes.className = "botoes"
    conteudoProduto.appendChild(botoes)

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)
}