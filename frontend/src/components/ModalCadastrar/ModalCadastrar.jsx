
import "./style.css";
import { Modal } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const ModalCadastrar = ({ open, close, atualizar }) => {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [tamanho, setTamanho] = useState('');
    const [genero, setGenero] = useState('');
    const [img_1, setImg_1] = useState('');
    const [img_2, setImg_2] = useState('');
    const [img_3, setImg_3] = useState('');
    const [img_4, setImg_4] = useState('');
    const [descricao, setDescricao] = useState('');

    const cadastrar = () => {

        const precoFormatado = Number(preco.replace(",", "."))

        const novoProduto = {
            nome: nome,
            preco: precoFormatado,
            tamanho: tamanho,
            genero: genero,
            img_1: img_1,
            img_2: img_2,
            img_3: img_3,
            img_4: img_4,
            descricao: descricao
        }


        axios.post('http://localhost:8081/cadastrar-produtos', novoProduto)
            .then((res) => {
                console.log("Tudo certo com a importação");
                close();
            })
            .catch((err) => console.log(err))

    }

    return (

        <Modal open={open} onClose={close} className='modal'>
            <div className="modal-cadastrar-bg">

                <h3>Cadastrar Produto</h3>

                <form className="form-cadastrar">
                    <div className="div-cadastrar-modal-pageAdmin">
                        <label htmlFor="">Produto: </label>
                        <input type="text" placeholder="Produto" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className="div-cadastrar-modal-pageAdmin">
                        <label htmlFor="">Preço: </label>
                        <input type="text" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} />
                    </div>

                    <div className="div-cadastrar-modal-pageAdmin">
                        <label htmlFor="">Tamanho: </label>
                        <input type="text" placeholder="Tamanho" value={tamanho} onChange={(e) => setTamanho(e.target.value)} />
                    </div>

                    <div className="div-cadastrar-modal-pageAdmin">
                        <label htmlFor="">Gênero: </label>
                        <input type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                    </div>

                    <div className="div-cadastrar-modal-pageAdmin">
                        <label htmlFor="">Imagens: </label>
                        <input type="text" placeholder="Imagem 1" value={img_1} onChange={(e) => setImg_1(e.target.value)} />
                        <input type="text" placeholder="Imagem 2" value={img_2} onChange={(e) => setImg_2(e.target.value)} />
                        <input type="text" placeholder="Imagem 3" value={img_3} onChange={(e) => setImg_3(e.target.value)} />
                        <input type="text" placeholder="Imagem 4" value={img_4} onChange={(e) => setImg_4(e.target.value)} />
                    </div>

                    <textarea
                        className="description-input"
                        type="text"
                        placeholder="Descrição"
                        value={descricao} onChange={(e) => setDescricao(e.target.value)}
                    >
                    </textarea>


                </form>
                <div className="modal-action-modal-cadastrar">
                    <button className='btn-primary-save' type="button" onClick={() => cadastrar()}>Salvar</button>
                </div>
            </div>
        </Modal>
    );
};
