import { useEffect, useState } from "react";
import axios from "axios";
import { ModalCatalago } from "../../components/ModalCatalalogo/modalCatalogo";
import { Card } from "../../components/Card/card";
import './style.css'
import { ModalCadastrar } from "../../components/ModalCadastrar/ModalCadastrar";
import { ModalAlterar } from "../../components/ModalAlterar/modalAlterar";


export const AdminPage = () => {

    const [products, setProducts] = useState([])
    const [productSelected, setProductSelected] = useState(null)
    const [openCadastro, setOpenCadastro] = useState(false)
    const [openAlterar, setOpenAlterar] = useState(false);
    const [loading, setLoading] = useState(true);

    const abrirModalAlterar = (i) => {
        setProductSelected(i)
        setOpenAlterar(true)
    }

    const fecharModal = () => {
        setOpenAlterar(false)
        setOpenCadastro(false)
    }

    const abrirCadastro = () => {
        setOpenCadastro(true)
    }

    useEffect(() => {
        axios.get("http://localhost:8081/")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log("Erro ao buscar produtos:", err))
            .finally(() => setLoading(false))
    }, []);

    return (
        <div className="section-pageAdmin">
            <h1>Todos os produtos</h1>

            <button className="btn-primary" onClick={() => abrirCadastro()}>Cadastrar novo produto</button>

            {loading && <p>Carregando produtos...</p>}

            {!loading && products.length === 0 && (
                <p>Nenhum produto encontrado.</p>
            )}


            <div className="grid-card-pageAdmin">
                {products.map((i) => (
                    <div className="card-wrapper-pageAdmin" key={i.id}>
                        <Card key={i.id}
                            imagem={i.img_1}
                            nome={i.nome}
                            preco={i.preco}
                            onClick={() => abrirModalAlterar(i)}
                        />

                    </div>
                ))}
            </div>



            <ModalAlterar open={openAlterar} close={fecharModal} produto={productSelected} atualizarLista={(id) => setProducts(products.filter(p => p.id !== id))} />
            <ModalCadastrar open={openCadastro} close={fecharModal} />

        </div>

    );
};