import imgLocation from '../../../assets/img/pageHome/sectionLocation/img-location.svg'
import { ButtonTemplate } from '../../../components/Button/Button'
import './style.css'


export const SectionHomeLocation = () => {

    return (
        <section className='location-section'>

            <div className='location-wrapper'>

                <div className='location-content'>
                    <h2>LOCALIZAÇÃO</h2>
                    <h4>BNG</h4>
                    <p>Shopping Páteo das Artes — Lojas 10/11<br />
                        Praça da Cultura, 45 — São Paulo</p>
                </div>
                <ButtonTemplate>Ver no mapa</ButtonTemplate>
                
            </div>

            <div className='location-img'>
                <img src={imgLocation} alt="clothes" />
            </div>

        </section>
    )
}

