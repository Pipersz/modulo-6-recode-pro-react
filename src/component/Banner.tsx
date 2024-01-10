export const Banner = () => {
    return (
        <section className="main-section">
            <div id="carouselExampleControls" className="carousel slide" data-slide="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active main-section-carousel-item black-bg">
                        <div className="container carousel-caption">
                            <h2>Mercury Viagens</h2>
                            <p className="d-none d-md-block">
                                Agência de viagens especializada em destinos incomuns, oferecendo
                                roteiros únicos e autênticos ao redor do mundo. Explore tesouros 
                                escondidos em selvas e mergulhe em culturas ancestrais 
                                preservadas. Planeje sua jornada inesquecível com nossos 
                                especialistas e descubra o mundo desconhecido.</p>
                        </div>
                        <img className="d-block w-100 opacity-50" 
                            src="images/pexels-andrew-neel-2859169.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item main-section-carousel-item black-bg">
                        <div className="container carousel-caption">
                            <h2>Mercury Viagens</h2>
                            <p className="d-none d-md-block">
                                Agência de viagens especializada em destinos incomuns, oferecendo roteiros únicos e 
                                autênticos ao redor do mundo. Explore tesouros escondidos em selvas e mergulhe em 
                                culturas ancestrais preservadas. Planeje sua jornada inesquecível com nossos 
                                especialistas e descubra o mundo desconhecido.
                            </p>
                        </div>
                        <img className="d-block w-100 opacity-50" src="images/epcot-gb74560e01_1280.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item main-section-carousel-item black-bg">
                        <div className="container carousel-caption">
                            <h2>Mercury Viagens</h2>
                            <p className="d-none d-md-block">
                                Agência de viagens especializada em destinos incomuns, 
                                oferecendo roteiros únicos e autênticos ao redor do mundo. 
                                Explore tesouros escondidos em selvas e mergulhe em culturas 
                                ancestrais preservadas. Planeje sua jornada inesquecível com 
                                nossos especialistas e descubra o mundo desconhecido.
                            </p>
                        </div>
                        <img className="d-block w-100 opacity-50" src="images/joshua-earle-ICE__bo2Vws-unsplash.jpg" alt="First slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        </section>
    );
};