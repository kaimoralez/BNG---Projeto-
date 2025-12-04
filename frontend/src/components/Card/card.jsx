import './style.css'

export const Card = ({imagem, nome, preco}) => {

    return(
        <>
            <div className="card-grid">
              <img src={imagem} alt="" />
              <p className='card-grid-description'>{nome}</p>
              <p className='card-grid-price'>{preco}</p>
            </div>
        </>
    )
}