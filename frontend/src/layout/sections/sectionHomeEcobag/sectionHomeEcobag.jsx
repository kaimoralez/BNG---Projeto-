import bolsa_verde from '../../../assets/img/pageHome/sectionEcobag/bolsa-bng-verde.svg'
import bolsa_offwhite from '../../../assets/img/pageHome/sectionEcobag/bolsa-bng-offwhite.svg'
import './style.css'
import { ButtonTemplate } from '../../../components/Button/button'


export const SectionHomeEcobag = () => {
    return (

        <section className="ecobag-section">
            <div className="ecobag-content">
                <h2>ECOBAG BNG </h2>
                <p>Nossas ecobags unem estilo e consciência ambiental. <br />
                    Produzidas com algodão reciclado e design minimalista, são ideais para o dia a dia.</p>
            </div>

            <div className="ecobag-container-img">
                <img src={bolsa_verde} alt="bolsa-verde-bng" />
                <img src={bolsa_offwhite} alt="bolsa-offwhite-bng" />
            </div>
            <ButtonTemplate>Conheça as Ecobags</ButtonTemplate>
        </section>

    )
}