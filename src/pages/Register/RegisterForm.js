import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css';
import logo from "../../assets/logo.png";
import axios from 'axios';

import {useNavigate} from "react-router-dom";

function RegisterForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    // const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }
    const handleSelect = (event) => {
        const name = event.target.name;
        const id = event.target.id;

        var value = document.getElementById(id).value;

        setInputs(values => ({...values,[name]: value}));
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:80/register',inputs);
        console.log(inputs);
    }



    return(
        <div className="flex-fix">
        <div className="RegisterForm form-signup w-100 m-auto">
            <img className="mb-4" src={logo} alt="Pirates-logo" width="25%"/>
            <form onSubmit={handleSubmit}>
                <div className="row">
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <div className="col-md-6">
                    <div className="form-name-container">
                        <div className="form-floating">
                        <input  onChange={handleChange} type="text" className="form-control"  placeholder="First name" required name="FirstName"/>
                            <label htmlFor="floatingInput">First name</label>
                        </div>
                        <div className="form-floating">
                            <input  onChange={handleChange} type="text" className="form-control"  placeholder="First name" required name="LastName"/>
                            <label htmlFor="floatingInput">Last name</label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="email" className="form-control"  placeholder="name@example.com" required name="Email"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="password" className="form-control"  placeholder="Password" required name="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="password" className="form-control"  placeholder="Confirm Password" required name="Role"/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="tel" className="form-control"  placeholder="Phone number" required name="PhoneNumber"/>
                        <label htmlFor="floatingPassword">Phone number</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input  onChange={handleChange} type="date" className="form-control"  placeholder="Birth date" required name="DOB"/>
                        <label htmlFor="floatingPassword">Birth date</label>
                    </div>
                    <div className="form-floating">

                    <select id="Gender" onChange={handleSelect} className="form-control gender-selector" name="Gender">
                        <option value="1" selected disabled hidden></option>
                        <option value="2">Male</option>
                        <option value="3">Female</option>
                    </select>
                    <label className="form-label select-label">Choose gender</label>

                    </div>
                    <div className="form-floating">

                    <select id="Uni" onChange={handleSelect} className="form-control university-selector" name="University" >
                        <option value="1" selected disabled hidden></option>
                        <option value="Ain Shams University">Ain Shams University</option>
                        <option value="Cairo University">Cairo University</option>
                        <option value="MUST">MUST</option>
                    </select>
                    <label className="form-label select-label">Choose University</label>

                    </div>
                    <div className="form-floating">

                    <select id="Faculty" onChange={handleSelect} className="form-control faculty-selector" name="Faculty" >
                        <option value="1" selected disabled hidden></option>
                        <option value="Engineering">Engineering</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                    </select>
                    <label className="form-label select-label">Choose Faculty</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    </div>
                </div>
                <p className="mt-5">already have an account? <a href="">Login</a></p>
                <p className="mb-3 text-muted">&copy; 2009–2023</p>
            </form>
        </div>
    </div>
    );
}

export default RegisterForm;

