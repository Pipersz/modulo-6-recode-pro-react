import { Imagem } from "../store/destino/destinoSlice";

export const Carousel = (props: { carouselId: string, imagens: Imagem[] }) => {

    const { carouselId, imagens } = props;

    return (
        <div id={carouselId} 
            className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                {
                    imagens.map((imagem, i) => {
                        return (
                            <div className={ `carousel-item ${i === 0 ? 'active' : ''}` } key={i}>
                                <img className="d-block w-100" 
                                    src={`data:image/png;base64, ${imagem.conteudo}`} 
                                    alt={imagem.nome} />
                            </div>
                        );
                    })
                }
            </div>

            <a className="carousel-control-prev full-opacity" 
                href={`#${carouselId}`}
                role="button" 
                data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next full-opacity" 
                href={`#${carouselId}`}
                role="button" 
                data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>

    );
};