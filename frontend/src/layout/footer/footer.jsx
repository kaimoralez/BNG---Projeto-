import { Link } from 'react-router-dom'
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
                            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >INÍCIO</Link></li>
                            <li><Link to="/catalogo">CATÁLOGO</Link></li>
                            <li><Link to="/sobre">SOBRE</Link></li>
                            <li><Link to="/contato">CONTATOS</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='footer-social-media'>
                    <h4>REDES SOCIAIS</h4>
                    <nav>
                        <ul>
                            <li><a href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer">INSTAGRAM</a></li>
                            <li><a href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer">FACEBOOK</a></li>
                            <li><a href="https://whatsapp.com"
                                target="_blank"
                                rel="noopener noreferrer">WHATSAPP</a></li>
                            <li><a href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer">X</a></li>
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


