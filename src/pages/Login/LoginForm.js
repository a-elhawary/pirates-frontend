import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import logo from "../../assets/logo.png"

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="LoginForm form-signin w-100 m-auto">
            <form>
                <img className="mb-4" src={logo} alt="Pirates-logo" width="80%"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3">don't have an account? <a href="">Register Now</a></p>
                <p className="mt-5 mb-3 text-muted">&copy; 2009–2023</p>
            </form>
        </div>
    );
}

export default LoginForm;

