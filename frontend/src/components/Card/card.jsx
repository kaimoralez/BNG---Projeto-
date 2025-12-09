import './style.css'

export const Card = ({ imagem, nome, preco, onClick }) => {

    return (
        <>
            <div className="card-grid" onClick={onClick} style={{ cursor: 'pointer' }}>
                <img src={imagem} alt="" />
                <p className='card-grid-description'>{nome}</p>
                <p className='card-grid-price'>{Number(preco).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}</p>
            </div>
        </>
    )
}