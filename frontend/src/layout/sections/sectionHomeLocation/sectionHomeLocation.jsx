import imgLocation from '../../../assets/img/pageHome/sectionLocation/img-location.svg'
import { ButtonTemplate } from '../../../components/Button/button'
import './style.css'



export const SectionHomeLocation = () => {
    const mapsLink = "https://www.google.com/maps/place/Senac+Largo+Treze/@-23.6471045,-46.7419496,14z/data=!4m10!1m2!2m1!1sSenac!3m6!1s0x94ce50f8ac76dfdb:0xc160a87f059ec93d!8m2!3d-23.6471045!4d-46.7038408!15sCgVTZW5hYyIDiAEBWgciBXNlbmFjkgEQdGVjaG5pY2FsX3NjaG9vbJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydHNVMUV4WnpSTlZVbDNWWHBGTVdFd1RqTlZNSEExV0RKb2FtVllZeEFC4AEA-gEECAAQRA!16s%2Fg%2F1thtf7vw?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"


    return (
        <section className='location-section'>

            <div className='location-wrapper'>

                <div className='location-content'>
                    <h2>LOCALIZAÇÃO</h2>
                    <h4>BNG</h4>
                    <p>Shopping Páteo das Artes — Lojas 10/11<br />
                        Praça da Cultura, 45 — São Paulo</p>
                </div>
                <ButtonTemplate href={mapsLink} target="_blank">Ver no mapa</ButtonTemplate>

            </div>

            <div className='location-img'>
                <img src={imgLocation} alt="clothes" />
            </div>

        </section>
    )
}

