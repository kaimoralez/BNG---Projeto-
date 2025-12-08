import { Link, useLocation } from 'react-router-dom'
import './style.css'
import lupa from '../../assets/img/icons/icons-header/lupa-icon.svg'
import { useEffect, useState } from 'react'



export const Header = () => {

    const [scrolled, setScrolled] = useState(false)
    const location = useLocation();

    useEffect(() => {
        const isHome = location.pathname === "/";

        if(!isHome){
            setScrolled(true);
            return;
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <header className={scrolled  ? "header scrolled" : "header"}>

            <p className='BNG-logo-header'><Link to="/">BNG</Link></p>

            <nav className='nav-header'>
                <ul>
                    <li className='nav-header-item'><Link to="/">INÍCIO</Link></li>
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