const produtosExemplo = [
  {
    imagem: 'imagem1.jpg',
    nome: 'Anel de Prata',
    descricao: 'Anel de prata com detalhes em pedra branca.'
  },
  {
    imagem: 'imagem2.jpg',
    nome: 'Colar Dourado',
    descricao: 'Colar dourado com pingente em formato de coração.'
  },
  {
    imagem: 'imagem3.jpg',
    nome: 'Brinco Preto',
    descricao: 'Brinco preto de argola com detalhes em strass.'
  }
];

function exibirProdutos(produtos) {
  const containerProdutos = document.getElementById('products');

  produtos.forEach(produto => {
    const cardProduto = document.createElement('div');
    cardProduto.classList.add('product-card');

    const imagemProduto = document.createElement('img');
    imagemProduto.src = produto.imagem;
    imagemProduto.alt = produto.nome;

    const nomeProduto = document.createElement('h3');
    nomeProduto.textContent = produto.nome;

    const descricaoProduto = document.createElement('p');
    descricaoProduto.textContent = produto.descricao;

    cardProduto.appendChild(imagemProduto);
    cardProduto.appendChild(nomeProduto);
    cardProduto.appendChild(descricaoProduto);

    containerProdutos.appendChild(cardProduto);
  });
}

exibirProdutos(produtosExemplo);
