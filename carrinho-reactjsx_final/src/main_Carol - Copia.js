const produtosLista = [
    {
        id: 'abc123',
        nome: 'JsRaiz para FW',
        preco: 300,
        descricao: 'O melhor curso do mundo',
        imagem: './img/photo.jpg'        
    },
    {
        id: 'bbc123',
        nome: 'JsRaiz para Node',
        preco: 1200,
        descricao: 'O melhor curso de todos',
        imagem: './img/photo.jpg'        
    },
    {
        id: 'cbc123',
        nome: 'Programacao Funcional com JS',
        preco: 500,
        descricao: 'O melhor funcional de todos',
        imagem: './img/photo.jpg'        
    }
];


function ProdutoComponent(props) {
    return (
        <div className="col-sm-4 mb-3">
            <div className="card loja__item">
                <img className="card-img-top" src={props.item.imagem}/>
                <div className="card-body">
                    <h5 class="card-title">{props.item.nome}</h5>
                    <small>R${props.item.preco}</small>
                    <p class="card-text">{props.item.descricao}</p>
                    <button class="btn btn-primary" onClick={props.onAddCarrinho.bind(null, props.item)} >Adicionar</button>
                </div>
            </div>
        </div>
        // React.createElement('div', { className: 'col-sm-4 mb-3'},
        //     React.createElement('div', {className: 'card loja__item'},
        //         React.createElement('img', { className: 'card-img-top', src: props.item.imagem}),
        //         React.createElement('div', { className: 'card-body'},
        //             React.createElement('h5', { className: 'card-title'}, props.item.nome),
        //             React.createElement('small', null, `R$${props.item.preco}`),
        //             React.createElement('p', { className: 'card-text'}, props.item.descricao),
        //             React.createElement('button', { className: 'btn btn-primary', onClick: props.onAddCarrinho.bind(null, props.item) },'Adicionar')
        //         )
        //     )
        // )

    )
}

function ListaProdutosComponent(props) {
    return(
        React.createElement('div', { className: 'row loja'},
        props.children
            /*props.itens.map(function(produto, index) {
                return React.createElement(ProdutoComponent, { item:produto, onAddCarrinho:props.onAddCarrinho, key: `produto-${index}` })
            })*/
        )
    )
}


function valorTotal(carrinhoItens) {
        return Object.keys(carrinhoItens).reduce(function(acc, produtoId) {
            return acc + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade)
        }, 0);  
}

function CarrinhoComponent(props) {
    return (
    <div className="carrinho">
        <div className="carrinho__itens">
            {Object.keys(props.itens).map(function(produtoId, index) {
                return(
                   <div className= "card carrinho__item" key= {`item-carrinho-${index}`}>
                    <div className= "card-body">
                        <h5 className= "card-title">{props.itens[produtoId].nome}</h5>
                        <p className="card-text">Preço Unidade: R${props.itens[produtoId].preco} | Quantidade: {props.itens[produtoId].quantidade}</p>
                        <p className="card-text">valor: R${props.itens[produtoId].preco*props.itens[produtoId].quantidade} | Quantidade: {props.itens[produtoId].quantidade}</p>
                        <button onClick={props.onRemoveItemCarrinho.bind(null,produtoId)} className="btn btn-danger btn-sm">Remover</button>
                    </div>    
                </div> 
                )
                
            })}
        </div> 
        <div className="carrinho__total mt-2 p-3">
            <h6>Total: <strong>R${valorTotal(props.itens)}</strong></h6>
        </div>
    </div>

        
   ) 
  }
function AppComponente() {
    const [carrinhoItens, addItemCarrinho] = React.useState({});

    // const carrinhoItens = {
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
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: 1
                }
            })
        } else {
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: ++carrinhoItens[produto.id].quantidade
                }
            })
            
        }            
    }

    function removeItemCarrinho(produtoId) {
        if (carrinhoItens[produtoId].quantidade <= 1) {
            delete carrinhoItens[produtoId];
            addItemCarrinho( { ...carrinhoItens} );
        } else {
            addItemCarrinho({
                ...carrinhoItens,
                [produtoId]: {
                    ...carrinhoItens[produtoId],
                    quantidade: --carrinhoItens[produtoId].quantidade
                }
            })
        }
    }

    return (
        <React.Fragment>
            <div className= 'col-sm-8'>
                <ListaProdutosComponent>
                    {produtosLista.map((produto, index) => (
                        <ProdutoComponent 
                        item={produto} 
                        onAddCarrinho={addCarrinho} 
                        key={`produto-${index}` }
                        />
                    ))}
                    
                </ListaProdutosComponent>    
            </div>
            <div className= 'col-sm-4'>
                <CarrinhoComponent itens={carrinhoItens} onRemoveItemCarrinho={removeItemCarrinho} />  
            </div>
        </React.Fragment>        
    ) 
}

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
)