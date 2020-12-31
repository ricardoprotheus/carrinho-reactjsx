export default function ProdutoComponent(props) {
    return (
        <div className="col-sm-4 mb-3">
            <div className="card loja__item">
                <img className="card-img-top" src={props.item.imagem} />
                <div className="card-body">
                    <h5 className="card-title">{props.item.nome}</h5>
                    <small>R${props.item.preco}</small>
                    <p className="card-text">{props.item.descricao}</p>
                    <button className="btn btn-primary" onClick={props.onAddCarrinho.bind(null, props.item)}>Adicionar</button>
                </div>
            </div>
        </div>

        //React.createElement('div', { className: 'col-sm-4 mb-3'},
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

    )
}
