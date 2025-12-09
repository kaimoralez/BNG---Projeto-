
import './style.css'
import { ButtonTemplate } from '../../../components/Button/button'
import { Card } from '../../../components/Card/card'
import { ModalCatalago } from '../../../components/ModalCatalalogo/modalCatalogo'
import { useEffect, useState } from 'react'
import axios from 'axios'


export const SectionHomeEcobag = () => {

    const [products, setProducts] = useState([])

    const idsDesejados = [5,6];

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
            .catch(error => {
                console.error('Erro ao buscar produtos:', error)
            })
    }, []);

    const produtosFiltrados = products.filter(i =>
        idsDesejados.includes(i.id)
    )

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
                {produtosFiltrados.map((i) => (
                    <div>
                        <Card
                            imagem={i.img_1}
                            nome={i.nome}
                            preco={i.preco}
                            onClick={() => abrirModal(i)}
                        />

                    </div>

                ))}

            </div>
            <ButtonTemplate to={"/catalogo"}>Conheça as Ecobags</ButtonTemplate>

            <ModalCatalago open={open} close={fecharModal} product={productSelected} />
        </section>

    )
}