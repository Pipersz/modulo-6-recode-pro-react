import { Link } from "react-router-dom";
import { PacoteViagem } from "../store/pacote-viagem/pacoteViagemSlice";

export const CardPacote = (props: { pacoteViagem: PacoteViagem }) => {

    const pacote = props.pacoteViagem;
    const imagens = pacote.destino.imagens;
    const primeiraImagem = imagens.length > 0 ? imagens[0] : null;

    return (
        <div className="card">
            <div className="card-image-container">
                {
                    primeiraImagem &&
                    <img className="card-img-top" 
                        src={`data:image/png;base64, ${primeiraImagem.conteudo}`} 
                        alt={primeiraImagem.nome} />
                }
            </div>
            <div className="card-body">
                <h3 className="card-title">{pacote.nome}</h3>
                <h4>{pacote.destino.nome}</h4>
                <p className="card-text overflow-y-scroll card-body-description">
                    {pacote.destino.descricao}
                </p>
                <Link to="/pacotes" className="btn primary-bg text-white btn-cta">Ver</Link>
            </div>
        </div>
    );
};