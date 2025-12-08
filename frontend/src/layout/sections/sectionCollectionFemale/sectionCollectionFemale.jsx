import { useState } from 'react'
import { ModalCatalago } from '../../../components/Modal/modal'
import './style.css'
import { ButtonTemplate } from '../../../components/Button/button'
import { Card } from '../../../components/Card/card'



export const SectionCollectionFemale = () => {

    const productsCollectionFemale = [
        {
            id: 1,
            imagem: "https://i.postimg.cc/cHCwhKg5/Blazer-Estruturado.png",
            nome: "Blazer Estruturado Oversized",
            preco: "R$ 90,00",
            tamanho: "M",
            descricao: "Um must-have para quem busca sofisticação e estilo contemporâneo! Este blazer de modelagem oversized é confeccionado em um tecido encorpado de tweed/flanela mescla cinza chumbo, perfeito para trazer textura e aquecimento ao look. Seus ombros discretamente esctruturados e o corte alongado garantem um caimento moderno e super confortável. Ideal para elevar o visual, seja com alfaiataria ou com peças casuais. Crie camadas e arrase!",
        },
        {
            id: 2,
            imagem: "https://i.postimg.cc/zBvK7Lb6/Camisa-Manga-Curta-Estampada.png",
            nome: "Camisa Estampada Geométrico Retrô",
            preco: "R$ 45,00",
            tamanho: "P",
            descricao: "Entre na tendência Y2K/Streetwear com essa calça cargo de impacto! Confeccionada em nylon/tactel cinza com leve brilho, ela possui uma modelagem super oversized e volumosa (parachute), garantindo um caimento moderno e confortável. O detalhe especial fica por conta do cós elástico preto contrastante, que adiciona um toque esportivo à peça utilitária. Perfeita para combinar com croppeds e criar um visual ousado e fashionista. Não fique sem a sua!"
        },
        {
            id: 3,
            imagem: "https://i.postimg.cc/B6bHp8L7/Calca-Cargo-de-Nylon-Parachute.png",
            nome: "Calça Cargo de Nylon Parachute",
            preco: "R$ 85,00",
            tamanho: "M",
            descricao: "Dê um up no seu estilo com esta camisa de manga curta super descolada! Com uma estampa geométrica de hexágonos que remete à moda vintage dos anos 70, ela é a peça ideal para quem não tem medo de cor. O tecido leve e o caimento soltinho garantem conforto máximo nos dias quentes. Combine com jeans para um visual casual ou com uma bermuda de alfaiataria para um look mais elaborado. Uma dose instantânea de estilo!"
        }
    ]


    const [open, setOpen] = useState(false)
    const [productSelected, setProductSelected] = useState(null)

    const abrirModal = (i) => {
        setProductSelected(i)
        setOpen(true)
    }

    const fecharModal = () => {
        setOpen(false)
    }



    return (
        <>
            <section className='section-collection-female'>
                <h2>Feminino</h2>
                <div className='grid-card-section-colletion-female'>
                    {productsCollectionFemale.map((i) => (

                            <div className="card-wrapper-section-collection-female">
                                <Card key ={i.id}
                                imagem = {i.imagem}
                                nome = {i.nome}
                                preco= {i.preco}
                                onClick={() => abrirModal(i)}
                                />
                                
                            </div>

                    ))}

                </div>

                

            </section>
            <ModalCatalago open={open} close={fecharModal} product={productSelected} />
        </>


    )
}