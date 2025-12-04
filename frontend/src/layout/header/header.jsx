import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/img/logoBNG/logo-BNG-header.svg'
import lupa from '../../assets/img/icons/icons-header/lupa-icon.svg'



export const Header = () => {
    return (
        <header>

            <Link to="/"><img src={logo} alt="logo bng" /></Link>

            <nav className='nav-header'>
                <ul>
                    <li className='nav-header-item'><Link to="/">INICIO</Link></li>
                    <li className='nav-header-item'><Link to="/catalogo">CATÁLOGO</Link></li>
                    <li className='nav-header-item'><Link to="/sobre">SOBRE</Link></li>
                    <li className='nav-header-item'><Link to="/contato">CONTATO</Link></li>
                </ul>

            </nav>
            <div className='nav-icon'>
                <img src={lupa} alt="logo bng" />
            </div>


        </header>


    )
}