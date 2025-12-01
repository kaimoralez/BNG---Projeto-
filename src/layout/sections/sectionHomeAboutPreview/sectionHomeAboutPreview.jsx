import labelBNG from '../../../assets/img/sectionAbout/img-about.svg'
import { Button } from '../../../components/Button/Button'
import './style.css'

export const SectionHomeAboutPreview = () => {
    return (
        <section className='about-section'>
            <div className='about-img'>
            <img src={labelBNG} alt="label-bng" />
            </div>
            

            <div className='about-wrapper'>
                <div className='about-content'>
                    <h2>SOBRE A MARCA</h2>
                    <p>A <span className='highlight'>BNG</span> une sustentabilidade e estilo em um só propósito: <span className='highlight'>dar nova vida à moda</span>.</p>
                </div>
    
                <Button onClick={() => console.log('Botão funcionando')}>Saiba mais</Button>

            </div>
        </section>

    )
}