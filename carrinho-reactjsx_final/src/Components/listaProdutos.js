export default function ListaProdutosComponent(props) {
    return(
        <div className="row loja">
            {props.children}
        </div>
        //React.createElement('div', { className: 'row loja'},
            //props.children
            //// props.itens.map(function(produto, index) {
            ////     return React.createElement(ProdutoComponent, { item:produto, onAddCarrinho:props.onAddCarrinho, key: `produto-${index}` })
            //// })
        //)
    )
}