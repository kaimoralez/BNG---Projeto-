import { Link } from 'react-router-dom'
import './style.css'

export const ButtonTemplate = ({ children, onClick, to, href, type = "button", target = "_self" }) => {

    if (href) {
        return(
            <a href={href}
            className='btn-primary'
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
            {children}</a>
        )
        
    }

    if(to){
        return(
            <Link to={to} className='btn-primary' type={type}>{children}</Link>
        )
    }

    return (
        <button className='btn-primary' onClick={onClick}>{children}</button>
    )
}