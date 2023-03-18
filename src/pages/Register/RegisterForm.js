import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterForm.css';
import logo from "../../assets/logo.png"

function RegisterForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return(
        <div className="flex-fix">
        <div className="RegisterForm form-signup w-100 m-auto">
            <img className="mb-4" src={logo} alt="Pirates-logo" width="25%"/>
            <form>
            <div className="row">
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <div className="col-md-6">
                    <div className="form-name-container">
                        <div className="form-floating">
                            <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className="form-control"  placeholder="First name" required/>
                            <label htmlFor="floatingInput">First name</label>
                        </div>
                        <div className="form-floating">
                            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" className="form-control"  placeholder="Last name" required/>
                            <label htmlFor="floatingInput">Last name</label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control"  placeholder="name@example.com" required/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control"  placeholder="Password" required/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control"  placeholder="Confirm Password" required/>
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    <div className="form-floating">
                        <input value={number} onChange={e => setNumber(e.target.value)} type="tel" className="form-control"  placeholder="Phone number" required/>
                        <label htmlFor="floatingPassword">Phone number</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input value={birthDate} onChange={e => setBirthDate(e.target.value)} type="date" className="form-control"  placeholder="Birth date" required/>
                        <label htmlFor="floatingPassword">Birth date</label>
                    </div>
                    <div className="form-floating">

                    <select className="form-control gender-selector" >
                        <option value="1" selected disabled hidden></option>
                        <option value="2">Male</option>
                        <option value="3">Female</option>
                    </select>
                    <label className="form-label select-label">Choose gender</label>

                    </div>
                    <div className="form-floating">

                    <select className="form-control university-selector" >
                        <option value="1" selected disabled hidden></option>
                        <option value="2">Ain Shams University</option>
                        <option value="3">Cairo University</option>
                        <option value="4">MUST</option>
                    </select>
                    <label className="form-label select-label">Choose University</label>

                    </div>
                    <div className="form-floating">

                    <select className="form-control faculty-selector" >
                        <option value="1" selected disabled hidden></option>
                        <option value="2">Engineering</option>
                        <option value="3">Computer Science</option>
                        <option value="4">Commerce</option>
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

