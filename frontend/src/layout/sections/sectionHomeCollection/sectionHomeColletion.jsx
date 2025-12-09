import './style.css'
import { ButtonTemplate } from '../../../components/Button/button';
import { Card } from '../../../components/Card/card';
import { useEffect, useState } from 'react';
import { ModalCatalago } from '../../../components/ModalCatalalogo/modalCatalogo';
import { Link } from 'react-router-dom';
import axios from 'axios'

export const SectionHomeCollection = () => {

  const [products, setProducts] = useState([])

  const idsDesejados = [2, 4, 3];

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

  const [open, setOpen] = useState(false)
  const [productSelected, setSelectedProduct] = useState(null)

  const abriModal = (i) => {
    setSelectedProduct(i)
    setOpen(true)
  }

  const fecharModal = () => {
    setOpen(false)
  }

  return (

    <section className='home-collection-section'>
      <h2>COLEÇÃO</h2>
      <div className="home-collection-container-grid">
        {produtosFiltrados.map((i) => (
          <div className='card-wrapper-section-home-collection'>

            <Card key={i.id}
              imagem={i.img_1}
              nome={i.nome}
              preco={i.preco}
              onClick={() => abriModal(i)}
            />

          </div>

        ))}
      </div>
      <ButtonTemplate to={"/catalogo"}>Ver mais</ButtonTemplate>

      <ModalCatalago open={open} close={fecharModal} product={productSelected} />
    </section>

  )
}