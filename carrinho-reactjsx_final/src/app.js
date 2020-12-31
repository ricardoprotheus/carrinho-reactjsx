import produtosLista from './data.js';
import ProdutoComponent from './Components/produto.js';
import ListaProdutosComponent from './Components/listaProdutos.js';
import CarrinhoComponent from './Components/carrinho.js';

export default function AppComponent() {
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
                <div className="col-sm-8">
                    <ListaProdutosComponent>
                        { produtosLista.map((produto, index) => (
                            <ProdutoComponent 
                                item={produto} 
                                onAddCarrinho={addCarrinho} 
                                key={`produto-${index}`} 
                            />
                        ))}
                    </ListaProdutosComponent>
                </div>
                <div className="col-sm-4">
                    <CarrinhoComponent itens={carrinhoItens} onRemoveItemCarrinho={removeItemCarrinho} />
                </div>
            </React.Fragment>
    ) 
}