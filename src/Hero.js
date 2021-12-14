import icon from "./Images/DH Handlooms-logos_black.png"
import "./Hero.css"
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className="px-4 py-5 my-5 text-center">
            {/* <img className="d-block mx-auto mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
            <h1 className="display-5 fw-bold">Kerala's Pride</h1>
            <div className="col-lg-6 mx-auto">
                <p>We use THREADS THAT STYLE GENERATIONS!!!</p>
                <p>We believe in "CUSTOMERS ARE ALWAYS RIGHT".</p>
                <p><b>Visit our online shop</b></p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/signup" classNameName="btn btn-primary btn-lg px-4 me-sm-3">Sign Up</Link>
                    <Link to="/login" classNameName="btn btn-outline-secondary btn-lg px-4">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;