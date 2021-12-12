import icon from "./Images/DH Handlooms-logos_black.png"
import "./Hero.css"

function Hero() {
    return (
        <div>
            <div>
                <img src={icon} width="325"/>
            </div>
            <div className="text-center border-bottom">
            <h1 className="display-4 fw-bold">Kerala's Pride</h1>
            <div className="col-lg-6 mx-auto">
                <p>We use THREADS THAT STYLE GENERATIONS!!!</p>
                <p>We believe in "CUSTOMERS ARE ALWAYS RIGHT".</p>
                <p><b>Visit our online shop</b></p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Sign Up</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Login</button>
                </div>
            </div>
            <div className="overflow-hidden" style={{"max-height": "30vh"}}>
                {/* <div className="container px-5">
                    <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                </div> */}
            </div>
        </div>
        </div>
        
    )
}

export default Hero;