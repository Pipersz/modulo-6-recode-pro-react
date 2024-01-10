import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="footer-bg pt-5 pb-4">
            <div className="container">
                <div className="d-flex gap-3">
                    <div className="w-50">
                        <h3>Links</h3>
                        <nav className="navbar navbar-expand-md">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/">Home</Link>
                                <Link className="nav-item nav-link" to="/destinos">Destinos</Link>
                                <Link className="nav-item nav-link" to="/pacotes">Pacotes</Link>                                
                            </div>
                        </nav>
                    </div>
                    <div className="w-50">
                        <h3>Redes sociais</h3>
                        <nav className="navbar navbar-expand-md">
                            <div className="collapse navbar-collapse container">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="https://tiktok.com" 
                                        target="_blank" rel="noreferrer">
                                        <i className="fi fi-brands-tik-tok"></i>
                                    </a>
                                    <a className="nav-item nav-link" href="https://instagram.com" 
                                        target="_blank" rel="noreferrer">
                                        <i className="fi fi-brands-instagram"></i>
                                    </a>
                                    <a className="nav-item nav-link" href="https://facebook.com" 
                                        target="_blank" rel="noreferrer">
                                        <i className="fi fi-brands-facebook"></i>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <p className="mt-3 text-center">&copy; 2023 Yasmin Mesquita</p>
            </div>
        </footer>
    );
};