import { Destino } from "../store/destino/destinoSlice";
import { ConteudoImagem } from "./ConteudoImagem";

export const CardDestino = (props: { destino: Destino, index: number }) => {

    const { destino, index } = props;
    const carouselId = `carousel${index}`;

    return (
        <div className="card">

            {/* <div className="carousel slide" data-ride="carousel"
                id={`carouselExampleIndicators${index}`}>
                <div className="carousel-inner">
                    {
                        destino.imagens.map((imagem, i) => {
                            return (
                                <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} >
                                    <img className="d-block w-100" 
                                        src={`data:image/jpeg;base64, ${imagem.conteudo}`} 
                                        alt={imagem.nome} />
                                </div>
                            );
                        })
                    }
                </div>
    
                <a className="carousel-control-prev full-opacity" 
                    href={`#carouselExampleIndicators${index}`}
                    role="button" 
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next full-opacity" 
                    href={`#carouselExampleIndicators${index}`}
                    role="button" 
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
    
            </div> */}
            <ConteudoImagem imagens={destino.imagens} carouselId={carouselId} />

            <div className="card-body">
                <h3 className="card-title">{destino.nome}</h3>
                <p className="card-text" style={{height: "150px", overflowY: "scroll"}}>
                    {destino.descricao}
                </p>                
            </div>
        </div>
    );
};