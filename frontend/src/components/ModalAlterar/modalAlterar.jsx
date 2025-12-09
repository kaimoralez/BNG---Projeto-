
import { Modal } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import './style.css'

export const ModalAlterar = ({ open, close, produto, atualizarLista }) => {



    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [tamanho, setTamanho] = useState("");
    const [genero, setGenero] = useState("");
    const [img_1, setImg_1] = useState("");
    const [img_2, setImg_2] = useState("");
    const [img_3, setImg_3] = useState("");
    const [img_4, setImg_4] = useState("");
    const [descricao, setDescricao] = useState("");


    useEffect(() => {
        if (produto) {
            setNome(produto.nome);
            setPreco(produto.preco);
            setTamanho(produto.tamanho);
            setGenero(produto.genero);
            setImg_1(produto.img_1);
            setImg_2(produto.img_2);
            setImg_3(produto.img_3);
            setImg_4(produto.img_4);
            setDescricao(produto.descricao);
        }
    }, [produto]);

    const salvarAlteracoes = () => {
        const produtoEditado = {
            nome,
            preco: Number(preco),
            tamanho,
            genero,
            img_1,
            img_2,
            img_3,
            img_4,
            descricao
        };

        axios.put(`http://localhost:8081/alterar-produtos/${produto.id}`, produtoEditado)
            .then(res => {
                console.log("Produto alterado com sucesso");
                close();
            })
            .catch(err => console.log(err));
    };


    const deletarProduto = () => {
        if (window.confirm("Tem certeza que deseja deletar este produto?")) {
            axios.delete(`http://localhost:8081/deletar-produtos/${produto.id}`)
                .then(() => {
                    console.log("Produto deletado com sucesso");
                    if (atualizarLista) atualizarLista(produto.id); // atualiza a lista no AdminPage
                    close(); // fecha o modal
                })
                .catch(err => console.log("Erro ao deletar produto:", err));
        }
    }


    return (
        <Modal open={open} onClose={close} className="modal">

            <div className="modal-alterar-bg">

                <h3>Editar Produto</h3>

                <form className="form-alterar">
                    <div className="div-alterar-modal-pageAdmin">
                        <label>Produto: </label>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="div-alterar-modal-pageAdmin">
                        <label>Preço: </label>
                        <input type="text" value={preco} onChange={e => setPreco(e.target.value)} />
                    </div>
                    <div className="div-alterar-modal-pageAdmin">
                        <label>Tamanho: </label>
                        <input type="text" value={tamanho} onChange={e => setTamanho(e.target.value)} />
                    </div>
                    <div className="div-alterar-modal-pageAdmin">
                        <label>Gênero: </label>
                        <input type="text" value={genero} onChange={e => setGenero(e.target.value)} />
                    </div>
                    <div className="div-alterar-modal-pageAdmin">
                        <label>Imagens: </label>
                        <input type="text" value={img_1} onChange={e => setImg_1(e.target.value)} />
                        <input type="text" value={img_2} onChange={e => setImg_2(e.target.value)} />
                        <input type="text" value={img_3} onChange={e => setImg_3(e.target.value)} />
                        <input type="text" value={img_4} onChange={e => setImg_4(e.target.value)} />
                    </div>

                    <textarea
                        className="description-input"
                        type="text"
                        placeholder="Descrição"
                        value={descricao} onChange={(e) => setDescricao(e.target.value)}
                    >
                    </textarea>


                </form>
                <div className="modal-action-modal-alterar">
                    <button className="btn-delete" onClick={() => deletarProduto()}>Deletar</button>
                    <button type="button" className="btn-alterar" onClick={() => salvarAlteracoes()}>Salvar</button>
                </div>
            </div>
        </Modal>
    );
};
