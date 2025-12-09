import { useEffect, useState } from 'react'
import { ModalCatalago } from '../../../components/ModalCatalalogo/modalCatalogo'
import './style.css'
import { Card } from '../../../components/Card/card'
import axios from 'axios'



export const SectionCollectionMale = () => {

    const [productsCollectionMale, setProductsCollectionMale] = useState([])
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
            const maleProducts = response.data.filter(prod => prod.genero === 'Masculino')
            setProductsCollectionMale(maleProducts)
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error)
        })
    }, [])


    return (
        <>
            <section className='section-collection-male'>
                <h2>Masculino</h2>
                <div className='grid-card-section-colletion-male'>
                    {productsCollectionMale.map((i) => (

                            <div className="card-wrapper-section-collection-male">
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