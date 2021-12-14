import logo from "./Images/DHIcon.png"
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="container-fluid">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

                <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src={logo} width="64" />
                </Link>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link px-2 text-muted">Products</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;