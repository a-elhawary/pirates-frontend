import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import logo from "../../assets/logo.png"
import {Link, useNavigate} from "react-router-dom";
import {post} from "../../connection";

function LoginForm(){
    const navigate = useNavigate();

    const [inputs,setInputs] = useState({});
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        post({
            route:"/login",
            data:inputs,
            callback:(response)=>{
                if(response.data.success == false){
                    setError(response.data.message);
                }else{
                    localStorage.setItem("pirates-token", JSON.stringify(response.data.token));
                    navigate("/");
                }
            }
        });
    }

    return(
        <div className="LoginForm">
            <div className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src={logo} alt="Pirates-logo" width="80%"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    {error != "" ? <span style={{color:"red"}}>{error}</span> : <></>}
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
                    <p className="mt-5 mb-3">don't have an account? <Link to="/register">Register Now</Link></p>
                    <p className="mt-5 mb-3 text-muted">&copy; 2009–2023</p>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

