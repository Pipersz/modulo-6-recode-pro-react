import { useEffect } from "react";
import { CardDestino } from "../component/CardDestino";
import { buscaDestinos, selector } from "../store/destino/destinoSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

export const Destino = () => {

    const { dados, carregando, erro } = useAppSelector(selector);
    const dispatch = useAppDispatch();

    useEffect(
        () => {
            dispatch(buscaDestinos())
        }, 
        [dispatch]
    );

    return (
        <main>
            <section className="pt-5 pb-5">
                <div className="container">
                    <h2 className="mb-4 text-center">Destinos</h2>
                    <div className="">
            
                        <div className="row gy-3">
                        
                            {
                                dados.map((destino, index) => {
                                    return (
                                        <div className="col-md-6" key={index}>
                                            <CardDestino destino={destino} index={index} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>        
    );
};