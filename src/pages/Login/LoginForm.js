import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import logo from "../../assets/logo.png"
import axios from 'axios';

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:80/login',inputs);
        console.log(inputs);
    }

    return(
        <div className="LoginForm form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <img className="mb-4" src={logo} alt="Pirates-logo" width="80%"/>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input onChange={handleChange} type="email" className="form-control"  placeholder="name@example.com" required name="Email"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange={handleChange} type="password" className="form-control"  placeholder="Password" required name="Password" />
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

