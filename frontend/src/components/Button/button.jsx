import './style.css'

export const ButtonTemplate = ({ children, onClick }) =>{
    
    return(
        <button className='btn-primary' onClick={onClick}>{children}</button>
    )
}