import { Route } from "react-router-dom";
import icon from './Images/DH Handlooms-logos_black.png'

//Adding NavBar and footer which we have removed from mainscreen
import Header from "./Header";
import Footer from "./Footer.js";
import './LayoutRoute.css'

function LayoutRoute(props){
return (
     //shorthand for React.Fragment
     <>          
        <Header {...props}/>
        <div>
            <img className="icon" src={icon} width="325"/>
        </div>
        <Route path={props.path} exact={props.exact} component={props.component} />
        <Footer {...props}/>
    </>
)
}

export default LayoutRoute;