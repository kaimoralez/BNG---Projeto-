import './style.css'
import { ButtonTemplate } from '../../../components/Button/button';
import { Card } from '../../../components/Card/card';
import { useState } from 'react';
import { ModalCatalago } from '../../../components/Modal/modal';

export const SectionHomeCollection = () => {
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
  ];


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
        {produtosCollection.map((i) => (
          <div className='card-wrapper-section-home-collection'>

            <Card key={i.id}
              imagem={i.imagem}
              nome={i.nome}
              preco={i.preco}
              onClick={() => abriModal(i)}
            />

          </div>

        ))}
      </div>
      <ButtonTemplate>Ver mais</ButtonTemplate>

      <ModalCatalago open={(open)} close={(fecharModal)} product={productSelected} />
    </section>

  )
}