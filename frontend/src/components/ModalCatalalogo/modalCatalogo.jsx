import { Modal } from '@mui/material'
import './style.css'
import { ButtonTemplate } from '../Button/button'



export const ModalCatalago = ({ open, close, product }) => {

    const whatsappLink = "https://www.whatsapp.com/"
    if (!product) return null


    return (
        <Modal open={open} onClose={close} className='modal'>
            <div className='container-modal'>
                <img src={product.img_1 || product.imagem} alt="imagem-bng" />

                <div className='container-content-modal'>

                    <div className='container-item'>
                        <div>
                            <p className='title-content-modal'>{product.nome}</p>
                            <p className='description-content-modal'>{Number(product.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>

                        <div>
                            {product?.tamanho && (
                                <p className='title-content-modal'>Tamanho</p>
                            )}
                            <p className='description-content-modal'>{product.tamanho}</p>
                        </div>
                        <div className='btn-template'>
                            <ButtonTemplate href={whatsappLink} target="_blank">Entre em contato para comprar</ButtonTemplate>
                        </div>


                        <div>
                            <p className='title-content-modal'>Descrição</p>
                            <p className='description-content-modal'>{product.descricao}</p>
                        </div>
                    </div>

                </div>

            </div>

        </Modal>


    )
}