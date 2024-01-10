import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { PacoteViagem, buscaPacotes, pacoteViagemSelector } from "../store/pacote-viagem/pacoteViagemSlice";
import { CardDetalhesPacote } from "../component/CardDetalhesPacote";

export const PagePacoteViagem = () => {

    const dispatch = useAppDispatch();
    const { dados, carregando, erro } = useAppSelector(pacoteViagemSelector);

    useEffect(
        () => {
            dispatch(buscaPacotes());
        }, 
        [dispatch]
    );

    const carouselIdBase = '#carouselExampleIndicators';

    return (
        <section className="sales-section pt-5 pb-5">
            <div className="container">
                <h2 className="mb-4 text-center">Pacotes de Viagem</h2>
                <div className="row gy-3 sales-row">
                    {
                        dados.map((pacote, index) => 
                            <div className="col-12" key={index}>
                                <CardDetalhesPacote pacote={pacote} index={index} />
                            </div>
                        )
                    }
        
                </div>
            </div>
        </section>  
    );
};