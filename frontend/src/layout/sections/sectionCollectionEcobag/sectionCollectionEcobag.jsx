import { useEffect, useState } from 'react'
import { ModalCatalago } from '../../../components/ModalCatalalogo/modalCatalogo'
import './style.css'
import { Card } from '../../../components/Card/card'
import axios from 'axios'



export const SectionCollectionEcobag = () => {

    const [productsCollectionEcobag, setProductsCollectionEcobag] = useState([])
    const [open, setOpen] = useState(false)
    const [productSelected, setProductSelected] = useState(null)

    const abrirModal = (i) => {
        setProductSelected(i)
        setOpen(true)
    }

    const fecharModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(response => {
            console.log(response.data)
            const ecobagProducts = response.data.filter(prod => prod.genero === 'Ecobag')
            setProductsCollectionEcobag(ecobagProducts)
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error)
        })
    }, [])


    return (
        <>
            <section className='section-collection-ecobag'>
                <h2>Ecobag</h2>
                <div className='grid-card-section-colletion-ecobag'>
                    {productsCollectionEcobag.map((i) => (

                            <div className="card-wrapper-section-collection-ecobag">
                                <Card key ={i.id}
                                imagem = {i.img_1}
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