import { useState } from 'react'
import { ModalCatalago } from '../../../components/Modal/modal'
import './style.css'

export const SectionCollectionFemale = () => {

    const [open, setOpen] = useState(false)

    const abrirModal = () => {
        setOpen(true)
    }

    const fecharModal = () => {
        setOpen(false)
    }

    return (
        <>
            <div>
                <h2>Feminino</h2>
                <div>
                    

                </div>

                <button onClick={() => abrirModal()}>Abrir modal</button>

            </div>
            <ModalCatalago open={open} close={fecharModal}/>
        </>


    )
}