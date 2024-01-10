
import { buscaPacotes, pacoteViagemSelector } from "../store/pacote-viagem/pacoteViagemSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect } from "react";
import { Banner } from "../component/Banner";
import { CardPacote } from "../component/CardPacote";

export const Home = () => {

    const { dados, carregando, erro } = useAppSelector(pacoteViagemSelector);
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(buscaPacotes());
        }, 
        [dispatch]
    );
    
    return (
        <main>
            <Banner />

            <section className="services-section gray-bg pt-5 pb-5">
                <div className="container">
                    <h2 className="mb-4 text-center">Pacotes de Viagens</h2>

                    <div className="row gy-3 sales-section-row">
                        {
                            dados.slice(0, 3).map((pacote, index) => {
                                return (
                                    <div className="col-lg-4" key={index} >
                                        <CardPacote pacoteViagem={pacote} />
                                    </div>          
                                );
                            })
                        }
                    </div>
                </div>
            </section>            
        </main>
    );
};