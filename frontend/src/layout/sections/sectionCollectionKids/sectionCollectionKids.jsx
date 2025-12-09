import { useEffect, useState } from 'react'
import { ModalCatalago } from '../../../components/ModalCatalalogo/modalCatalogo'
import './style.css'
import { Card } from '../../../components/Card/card'
import axios from 'axios'



export const SectionCollectionKids = () => {

    const [productsCollectionKids, setProductsCollectionKids] = useState([])
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
            const kidsProducts = response.data.filter(prod => prod.genero === 'Kids')
            setProductsCollectionKids(kidsProducts)
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error)
        })
    }, [])


    return (
        <>
            <section className='section-collection-kids'>
                <h2>Kids</h2>
                <div className='grid-card-section-colletion-kids'>
                    {productsCollectionKids.map((i) => (

                            <div className="card-wrapper-section-collection-kids">
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