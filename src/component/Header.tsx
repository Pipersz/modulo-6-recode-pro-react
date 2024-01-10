import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg primary-bg">
                <div className="menu-mobile">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fi fi-rr-menu-burger" style={{color: "white"}}></i>
                    </button>
                    <span>
                        <img src="/images/logo_mercury_2_3.png" 
                            style={{height: "30px"}} alt="Mercury Viagens" />
                        <span className="text-white texto-logo">Mercury Viagens</span>
                    </span>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logo-pc">
                                <img src="/images/logo_mercury_2_3.png" 
                                    style={{height: "70px"}} alt="Mercury Viagens" />
                                <span className="text-white texto-logo">Mercury Viagens</span>
                            </div>
                            <div className="navbar-nav ">
                                <Link to="/" className="text-white nav-item nav-link">Página Inicial</Link>
                                <Link to="/destinos" className="text-white nav-item nav-link">Destinos</Link>
                                <Link to="/pacotes" className="text-white nav-item nav-link">Pacotes</Link>                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}