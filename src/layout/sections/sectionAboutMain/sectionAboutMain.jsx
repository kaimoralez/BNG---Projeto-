import './style.css'
import aboutMainImg from '../../../assets/img/pageAbout/aboutIntro/about-img.svg'

export const SectionAboutMain = () =>{

    return(
        <main className='about-main-section'>
            <div className='about-main-img'>
                <img src={aboutMainImg} alt="studio-bng" />
            </div>

            <div className='about-main-content'>
                <h1>SOBRE A BNG</h1>
                <h4>Beleza, Natureza & Garbo</h4>
                <p>Moda consciente, estilo atemporal.</p>
            </div>



        </main>

    )
}