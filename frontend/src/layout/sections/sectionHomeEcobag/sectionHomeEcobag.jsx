
import './style.css'
import { ButtonTemplate } from '../../../components/Button/button'
import { Card } from '../../../components/Card/card'
import { ModalCatalago } from '../../../components/Modal/modal'
import { useState } from 'react'


export const SectionHomeEcobag = () => {
    const productsEcobag = [
        {
            id: 1,
            imagem: "https://i.postimg.cc/7Ykt0Z3d/bolsa_bng_verde.jpg",  
            nome: "Ecobag BNG (Verde)",
            preco: "R$ 35,00"
        },
        {
            id: 2,
            imagem: "https://i.postimg.cc/BQ07HnTr/bolsa_bng_offwhite.jpg",
            nome: "Ecobag BNG (Off-White)",
            preco: "R$ 25,00"
        }
    ]

    const [open, setOpen] = useState(false);
    const [productSelected, setProductSelected] = useState(null);

    const abrirModal = (i) => {
        setProductSelected(i);
        setOpen(true)
    }

    const fecharModal = () => {
        setOpen(false)
    }


    return (


        <section className="ecobag-section">
            <div className="ecobag-content">
                <h2>ECOBAG BNG </h2>
                <p>Nossas ecobags unem estilo e consciência ambiental. <br />
                    Produzidas com algodão reciclado e design minimalista, são ideais para o dia a dia.</p>
            </div>

            <div className="ecobag-container-card">
                {productsEcobag.map((i) => (
                    <div>
                        <Card
                            imagem={i.imagem}
                            nome={i.nome}
                            preco={i.preco}
                            onClick={() => abrirModal(i)}
                        />

                    </div>

                ))}

            </div>
            <ButtonTemplate>Conheça as Ecobags</ButtonTemplate>

            <ModalCatalago open={open} close={fecharModal} product={productSelected} />
        </section>

    )
}