import './style.css'

export const SectionContact = () => {

    return (


        <div className='contact-section'>

            <div className='contact-container-intro'>
                <h1>CONTATO</h1>
                <p>Entre em contato com a BNG. <br />
                Estamos sempre disponíveis para esclarecer dúvidas, acompanhar seus pedidos e apresentar nossas novas coleções e peças exclusivas.</p>
            </div>

        
            <div className='contact-container-info'>
                <h3>INFORMAÇÕES DE ATENDIMENTO</h3>
                <ul>
                    <li>E-mail: contato@bng.com</li>
                    <li>WhatsApp: (99) 9999-9999</li>
                    <li>Localização: Shopping Páteo das Artes — Lojas 10/11 </li>
                    <li>Praça da Cultura, 45 —São Paulo</li>
                    <li>Horário: Segunda a sexta, das 10h às 18h</li>
                </ul>
            </div>

            <div className='contact-container-social'>
                <h3>REDES SOCIAIS</h3>
                <p>Para novidades e novos lançamentos, siga nossas atualizações nas redes sociais oficiais.</p>
                <ul>
                    <li>Facebook — BNG</li>
                    <li>Instagram — @bng</li>
                    <li>X — @bng</li>
                </ul>
                
            </div>

        </div>


    )
}