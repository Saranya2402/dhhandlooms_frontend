import {useState} from 'react'
function LoginScreen(){
    const[formState,setFormState]=useState("initial");

    return(
        <div className="container" style={{ "margin-top": "5em", "max-width": "40em" }}>

            <h1>Login to your Account</h1>
            <br />

            <label>Enter your firstname *</label>
            <input className="field form-control" name="firstName" type="text" />

            <label>Enter your password *</label>
            <input className="field form-control" name="password" autocomplete="off" type="password" />

            <br />

            {
                formState !== "successfull" &&
                <button
                    className="btn btn-primary"
                    onClick="registerUser()"
                    style={{ "padding": "10px", "font-size": "16px" }}>
                    Login
                </button>
            }
            <br/> <br/> <br/>  <br/> <br/> <br/><br/>

        </div>

    )
}
export default LoginScreen;