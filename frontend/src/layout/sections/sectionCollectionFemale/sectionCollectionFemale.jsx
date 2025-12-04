import { useState } from 'react'
import { ModalCatalago } from '../../../components/Modal/modal'
import './style.css'



export const SectionCollectionFemale = () => {

    const produtosCollection = [
        {
            id: 1,
            imagem: "https://i.postimg.cc/cHCwhKg5/Blazer-Estruturado.png",
            nome: "Blazer Estruturado Oversized",
            preco: "R$ 90,00"
        },
        {
            id: 2,
            imagem: "https://i.postimg.cc/zBvK7Lb6/Camisa-Manga-Curta-Estampada.png",
            nome: "Camisa Estampada Geométrico Retrô",
            preco: "R$ 45,00"
        },
        {
            id: 3,
            imagem: "https://i.postimg.cc/B6bHp8L7/Calca-Cargo-de-Nylon-Parachute.png",
            nome: "Calça Cargo de Nylon Parachute",
            preco: "R$ 85,00"
        }
    ]


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
                    {produtosCollection.map((i) => (
                        <div>
                            <img src={i.imagem} alt="" />
                            <p>{i.nome}</p>
                            <p>{i.preco}</p>
                        </div>

                    ))}

                </div>

                <button onClick={() => abrirModal()}>Abrir modal</button>

            </div>
            <ModalCatalago open={open} close={fecharModal} />
        </>


    )
}