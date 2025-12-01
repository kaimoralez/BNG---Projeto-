import logoBNG from '../../assets/img/footer/footer-img.svg'
import './style.css'
export const Footer = () => {
    return (

        <footer>
            <p className='footer-text'>Criado no Brasil. Inspirado na natureza.</p>

            <div className='footer-menus'>
                <div className='footer-menu-alternative'>
                    <h4>MENU ALTERNATIVO</h4>
                    <nav>
                        <ul>
                            <li>INÍCIO</li>
                            <li>CATÁLOGO</li>
                            <li>SOBRE</li>
                            <li>CONTATOS</li>
                        </ul>
                    </nav>
                </div>

                <div className='footer-social-media'>
                    <h4>REDES SOCIAIS</h4>
                    <nav>
                        <ul>
                            <li>INSTAGRAM</li>
                            <li>FACEBOOK</li>
                            <li>WHATSAPP</li>
                            <li>X</li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='footer-brand'>
                <img src={logoBNG} alt="logo-bng-branco" />
                <p>© 2025 BNG</p>
            </div>


        </footer>
    )
}


