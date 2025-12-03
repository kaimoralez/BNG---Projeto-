

import { Box, Button, Modal } from '@mui/material'
import './style.css'
import illustration from '../../assets/illustration.svg'
import { ButtonTemplate } from '../Button/button'



export const ModalCatalago = ({ open, close }) => {



    return (
        <Modal open={open} onClose={close} className='modal'>
            <div className='container-modal'>
                <img src={illustration} alt="" />

                <div className='container-content-modal'>

                    <div className='container-item'>
                        <p className='title-content-modal'>Blazer Estruturado Oversized</p>
                        <p className='description-content-modal'>R$ 90,00</p>
                    </div>

                    <div className='container-size'>
                        <p className='title-content-modal'>Tamanho</p>
                        <p className='description-content-modal'>M</p>
                    </div>

                    <ButtonTemplate>Entre em contato para comprar</ButtonTemplate>

                    <div className="container-description">
                        <p className='title-content-modal'>Descrição</p>
                        <p className='description-content-modal'>Um must-have para quem busca sofisticação e estilo contemporâneo! Este blazer de modelagem oversized é confeccionado em um tecido encorpado de tweed/flanela mescla cinza chumbo, perfeito para trazer textura e aquecimento ao look. Seus ombros discretamente esctruturados e o corte alongado garantem um caimento moderno e super confortável. Ideal para elevar o visual, seja com alfaiataria ou com peças casuais. Crie camadas e arrase!</p>
                    </div>
                </div>




            </div>
            {/* <div className='modal-img-container'>
                    <img src={collectionItem.img} alt="" />
                </div>

                <div className='modal-content-container'>
                    <div className='container-item'>
                        <p>{collectionItem.nome}</p>
                        <p>{collectionItem.preco}</p>
                    </div>

                    <div className='container-size'>
                        <p>Tamanho</p>
                        <p>{collectionItem.tamanho}</p>
                    </div>

                    <Button>Entre em contato para comprar</Button>

                    <div className='container-description'>
                        <p>Descrição</p>
                        <p>{collectionItem.descricao}</p>
                    </div>

                    <Button onClick={close}>Fechar</Button>
                    
                </div> */}


        </Modal>


    )
}