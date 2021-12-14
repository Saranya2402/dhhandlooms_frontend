import logo from "./Images/DHIcon.png";
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegistrationScreen from "./SignUp";
import HomeScreen from "./HomeScreen";
import Contact from './ContactScreen';

function Header(props){

    const initialState = {
        'home': '',
        'products': '',
        'contact':'',
        'about':''
    }
    const [state, setState] = useState(initialState)


    useEffect(
        function() {

            if(props.path === '/') {
                setState(
                    {...initialState, 'home': 'active'}
                )
            } else  if(props.path === '/products') {
                setState(
                    {...initialState, 'products': 'active'}
                )
            }
            else  if(props.path === '/contact') {
                setState(
                    {...initialState, 'contact': 'active'}
                )
            }
            else  if(props.path === '/about') {
                setState(
                    {...initialState, 'about': 'active'}
                )
            }
        },
        [props.path]
    )

    return(
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/">
                        <img src={logo} width="64" />
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item"><Link to="/" className={`nav-link ${state['home']}`}>Home</Link></li>
                        <li className="nav-item"><Link to="/products" className={`nav-link ${state['products']}`}>Products</Link></li>   
                        <li className="nav-item"><Link to="/contact" className={`nav-link ${state['contact']}`}>Contact</Link></li>
                        <li className="nav-item"><Link to="/about" className={`nav-link ${state['about']}`}>About</Link></li>
                    </ul>

                    <form classNameName="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                        {/* <button type="button" className="btn btn-outline-light me-2">Login</button> */}
                        {/* <button type="button" onClick={RegistrationScreen} className="btn btn-warning">Sign-up</button> */}
                        <Link to="/signup" className="btn btn-warning">Sign up</Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;