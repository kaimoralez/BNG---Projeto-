

import { Box, Button, Modal } from '@mui/material'
import './style.css'
import illustration from '../../assets/illustration.svg'
import { ButtonTemplate } from '../Button/button'



export const ModalCatalago = ({ open, close, product }) => {

    if (!product) return null


    return (
        <Modal open={open} onClose={close} className='modal'>
            <div className='container-modal'>
                <img src={product.imagem} alt="imagem-bng" />

                <div className='container-content-modal'>

                    <div className='container-item'>
                        <p className='title-content-modal'>{product.nome}</p>
                        <p className='description-content-modal'>{product.preco}</p>
                        <p className='title-content-modal'>Tamanho</p>
                        <p className='description-content-modal'>{product.tamanho}</p>
                        <ButtonTemplate>Entre em contato para comprar</ButtonTemplate>
                        <p className='title-content-modal'>Descrição</p>
                        <p className='description-content-modal'>{product.descricao}</p>
                    </div>

                   
                </div>




            </div>


        </Modal>


    )
}