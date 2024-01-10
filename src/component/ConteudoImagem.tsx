import { Imagem } from "../store/destino/destinoSlice";
import { Carousel } from "./Carousel";

export const ConteudoImagem = (props: { imagens: Imagem[], carouselId: string}) => {

    const { imagens, carouselId } = props;

    if (imagens.length === 0) {
        return <div></div>
    }

    if (imagens.length === 1) {

        const imagem = imagens[0];
        return (
            <img src={`data:image/jpeg;base64, ${imagem.conteudo}`} alt={imagem.nome}
                    className="d-block w-100"  />
        );
    }

    return <Carousel imagens={imagens} carouselId={carouselId} />
};