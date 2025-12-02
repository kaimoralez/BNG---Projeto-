import './style.css'
import { Button } from '../../../components/Button/Button'
import { Card } from '../../../components/Card/card';

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

  return (
    <>

      <section className='home-collection-section'>
        <h2>COLEÇÃO</h2>
        <div className="home-collection-container-grid">
          {produtosCollection.map((i) => (
            <Card
            imagem = {i.imagem}
            nome= {i.nome}
            preco= {i.preco}
            />
          ))}
        </div>
        <Button>Ver mais</Button>
      </section>

    </>


  )
}