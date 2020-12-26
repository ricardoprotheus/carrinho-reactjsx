const produtosLista = [{
  id: 'abc123',
  nome: 'JsRaiz para FW',
  preco: 300,
  descricao: 'O melhor curso do mundo',
  imagem: 'https://lorempixel.com/500/300'
}, {
  id: 'bbc123',
  nome: 'JsRaiz para Node',
  preco: 1200,
  descricao: 'O melhor curso de todos',
  imagem: 'https://lorempixel.com/500/300'
}, {
  id: 'cbc123',
  nome: 'Programacao Funcional com JS',
  preco: 500,
  descricao: 'O melhor funcional de todos',
  imagem: 'https://lorempixel.com/500/300'
}];

function ProdutoComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4 sb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card loja__item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "card-img-to",
    src: props.item.imagem
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, props.item.nome), /*#__PURE__*/React.createElement("small", null, "R$", props.item.preco), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, props.item.descricao), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: props.onAddCarrinho.bind(null, props.item)
  }, "Adicionar")))) //React.createElement('div', { className: 'col-sm-4 mb-3'},
  //    React.createElement('div', {className: 'card loja__item'},
  //        React.createElement('img', { className: 'card-img-top', src: props.item.imagem}),
  //        React.createElement('div', { className: 'card-body'},
  //            React.createElement('h5', { className: 'card-title'}, props.item.nome),
  //            React.createElement('small', null, `R$${props.item.preco}`),
  //            React.createElement('p', { className: 'card-text'}, props.item.descricao),
  //            React.createElement('button', { className: 'btn btn-primary', onClick: props.onAddCarrinho.bind(null, props.item) },'Adicionar')
  //        )
  //    )
  //)
  ;
}

function ListaProdutosComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row loja"
  }, props.children) //React.createElement('div', { className: 'row loja'},
  //props.children
  //// props.itens.map(function(produto, index) {
  ////     return React.createElement(ProdutoComponent, { item:produto, onAddCarrinho:props.onAddCarrinho, key: `produto-${index}` })
  //// })
  //)
  ;
}

function valorTotal(carrinhoItens) {
  return Object.keys(carrinhoItens).reduce(function (acc, produtoId) {
    return acc + carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade;
  }, 0);
}

function CarrinhoComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "carrinho"
  }, /*#__PURE__*/React.createElement("div", {
    class: "carrinho__itens"
  }, Object.keys(props.itens).map(function (produtoId, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "card carrinho__item",
      key: `item-carriho-${index}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "card-title"
    }, props.itens[produtoId].nome), /*#__PURE__*/React.createElement("p", {
      className: "card-text"
    }, "Pre\uFFFDo unidade: R$", props.itens[produtoId].preco, " | Quantidade: ", props.itens[produtoId].quantidade), /*#__PURE__*/React.createElement("p", {
      className: "card-text"
    }, "Valor: R$", props.itens[produtoId].preco * props.itens[produtoId].quantidade), /*#__PURE__*/React.createElement("button", {
      onClick: props.onRemoveItemCarrinho.bind(null, produtoId),
      className: "btn btn-danger btn-sm"
    }, "Remover")));
  })), /*#__PURE__*/React.createElement("div", {
    class: "carrinho__total carrinho__total mt-2 p-3"
  }, /*#__PURE__*/React.createElement("h6", null, "Total: ", /*#__PURE__*/React.createElement("strong", null, "R$", valorTotal(props.itens)))));
}

function AppComponente() {
  const [carrinhoItens, addItemCarrinho] = React.useState({}); // const carrinhoItens = {
  //     'abc123': {
  //     id: 'abc123',
  //     nome: 'JsRaiz para FW',
  //     preco: 300,
  //     descricao: 'O melhor curso do mundo',
  //     imagem: 'https://lorempixel.com/500/300',
  //     quantidade: 1        
  //     },
  //     'bbc123': {
  //     id: 'bbc123',
  //     nome: 'JsRaiz para Node',
  //     preco: 1200,
  //     descricao: 'O melhor curso de todos',
  //     imagem: 'https://lorempixel.com/500/300',
  //     quantidade: 2        
  //     }
  //}

  function addCarrinho(produto) {
    if (!carrinhoItens[produto.id]) {
      addItemCarrinho({ ...carrinhoItens,
        [produto.id]: { ...produto,
          quantidade: 1
        }
      });
    } else {
      addItemCarrinho({ ...carrinhoItens,
        [produto.id]: { ...produto,
          quantidade: ++carrinhoItens[produto.id].quantidade
        }
      });
    }
  }

  function removeItemCarrinho(produtoId) {
    if (carrinhoItens[produtoId].quantidade <= 1) {
      delete carrinhoItens[produtoId];
      addItemCarrinho({ ...carrinhoItens
      });
    } else {
      addItemCarrinho({ ...carrinhoItens,
        [produtoId]: { ...carrinhoItens[produtoId],
          quantidade: --carrinhoItens[produtoId].quantidade
        }
      });
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/React.createElement(ListaProdutosComponent, null, produtosLista.map((produto, index) => /*#__PURE__*/React.createElement(ProdutoComponent, {
    item: produto,
    onAddCarrinho: addCarrinho,
    key: `produto-${index}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement(CarrinhoComponent, {
    itens: carrinhoItens,
    onRemoveItemCarrinho: removeItemCarrinho
  })));
}

ReactDOM.render(React.createElement(AppComponente), document.getElementById('app'));
