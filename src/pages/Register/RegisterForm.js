import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css';
import logo from "../../assets/logo.png";
import axios from 'axios';
import dateFormat, { masks } from "dateformat";

import {useNavigate} from "react-router-dom";

function RegisterForm(){

    const [showPassowrdMissmatch,setShowPasswordMissmatch] = useState(false);
    masks.DBFormat = 'yyyy-mm-dd';
    var now = new Date();
    now.setFullYear(now.getFullYear() - 15);
    const max = dateFormat(now,"DBFormat");
    now.setFullYear(now.getFullYear() - 30);
    const min = dateFormat(now,"DBFormat");
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if(name==="ConfirmPassword"){
            if(!(inputs["Password"]===value)){
                setShowPasswordMissmatch(true);
            }
            else{
                setShowPasswordMissmatch(false);
            }
        }
        else if(name==="Password"){
            if("ConfirmPassword" in inputs){
                if(!(inputs["ConfirmPassword"]===value)){
                    setShowPasswordMissmatch(true);
                }
                else{
                    setShowPasswordMissmatch(false);
                }
            }
        }
        
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
        <div className="RegisterForm">
        <div className="form-signup w-100 m-auto">
            <img className="mb-4" src={logo} alt="Pirates-logo" width="25%"/>
            <form onSubmit={handleSubmit}>
                <div className="row">
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <div className="col-md-6">
                    <div className="form-name-container">
                        <div className="form-floating">
                        <input  onChange={handleChange} type="text" className="form-control"  placeholder="First name" required pattern="[A-Za-z\s]+" title="Name can have charachters and spaces only" name="FirstName"/>
                        <label htmlFor="floatingInput">First name</label>
                        </div>
                        <div className="form-floating">
                            <input  onChange={handleChange} type="text" className="form-control"  placeholder="First name" required pattern="[A-Za-z\s]+" title="Name can have charachters and spaces only" name="LastName"/>
                            <label htmlFor="floatingInput">Last name</label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="email" className="form-control"  placeholder="name@example.com" required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="Email"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="password" className="form-control"  placeholder="Password" required  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" name="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleChange} type="password" className="form-control"  placeholder="Confirm Password" required name="ConfirmPassword"/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    {showPassowrdMissmatch? <p style={{"color":"red"}}>passwords must match</p>:null}
                    <div className="form-floating">
                        <input onChange={handleChange} type="tel" className="form-control"  placeholder="Phone number" required pattern="^(010|011|012|015|\+2010|\+2011|\+2012|\+2015)[0-9]{8}$" title="invalid phone number" name="PhoneNumber"/>
                        <label htmlFor="floatingPassword">Phone number</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input  onChange={handleChange} type="date" className="form-control"  placeholder="Birth date" required name="DOB" min={min} max={max}/>
                        <label htmlFor="floatingPassword">Birth date</label>
                    </div>
                    <div className="form-floating">

                    <select id="Gender" onChange={handleSelect} className="form-control gender-selector" name="Gender" required title="field required">
                        <option value="" selected disabled hidden></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <label className="form-label select-label">Choose gender</label>

                    </div>
                    <div className="form-floating">

                    <select id="Uni" onChange={handleSelect} className="form-control university-selector" name="University" required >
                        <option value="" selected disabled hidden></option>
                        <option value="Ain Shams University">Ain Shams University</option>
                        <option value="Cairo University">Cairo University</option>
                        <option value="MUST">MUST</option>
                    </select>
                    <label className="form-label select-label">Choose University</label>

                    </div>
                    <div className="form-floating">

                    <select id="Faculty" onChange={handleSelect} className="form-control faculty-selector" name="Faculty" required >
                        <option value="" selected disabled hidden></option>
                        <option value="Engineering">Engineering</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                    </select>
                    <label className="form-label select-label">Choose Faculty</label>
                    </div>
                    {showPassowrdMissmatch? <p style={{"color":"transparent"}}>work smart</p>:null}
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

