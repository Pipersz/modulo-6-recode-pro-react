import { Imagem } from "../store/destino/destinoSlice";
import { PacoteViagem } from "../store/pacote-viagem/pacoteViagemSlice";
import { Carousel } from "./Carousel";
import { ConteudoImagem } from "./ConteudoImagem";

export const CardDetalhesPacote = (props: { pacote: PacoteViagem, index: number }) => {

    const { pacote, index } = props;
    const { dataVolta, dataIda } = pacote;
    const carouselId = `carousel${index}`;

    const millisPorDia = 24 * 60 * 60 * 1000;
    const diferencaEmMillis = (new Date(dataVolta)).valueOf() - (new Date(dataIda)).valueOf();
    const diferencaEmDias = Math.round(diferencaEmMillis / millisPorDia);

    // const conteudoImagem = criaConteudoImagem(pacote.destino.imagens, carouselId);

    return (
        <div className="card">
            
            <ConteudoImagem imagens={pacote.destino.imagens} carouselId={carouselId} />

            <div className="card-body w-100">
                <h3 className="card-title" >{pacote.nome}</h3>
                <h4 >{pacote.destino.nome}</h4>
                <p className="card-text overflow-y-scroll card-body-description">
                    {pacote.destino.descricao}
                </p>
                <p className="secondary-bg p-1">
                    R$ {pacote.preco} referente a <span>{diferencaEmDias}</span> dia(s)
                    com tudo incluso.
                </p>
                <p className="secondary-bg p-1">
                    Parcelamos em {pacote.numMaxPrestacoes}x sem juros.
                </p>                                    
            </div>
        </div>
    );
};
