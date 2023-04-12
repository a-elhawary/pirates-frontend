import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddInterviewSlot.css';
import axios from 'axios';

function AddInterviewSlot(){ 



    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) =>{
        axios.post('http://localhost:80/AddInterviewSlot',inputs);
        console.log(inputs);
    }
    
    return(
        <div className="AddSlotForm form-addslot w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="h2 mb-3 fw-normal">Add Interview Slot</h1>

                <div className="form-floating">
                    <input onChange={handleChange} type="email" className="form-control"  placeholder="name@example.com" required name="AdminEmail"/>
                    <label htmlFor="floatingInput">Interviewer Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange={handleChange} type="text" className="form-control"  placeholder="Password" required name="EventID" />
                    <label htmlFor="floatingPassword">Event ID</label>
                </div>
                <div className="form-floating">
                        <input  onChange={handleChange} type="date" className="form-control"  placeholder="date" required name="Date"/>
                        <label htmlFor="floatingPassword">Date</label>
                </div> 
                <div className="form-floating">
                        <input  onChange={handleChange} type="time" className="form-control"  placeholder="Start" required name="StartTime"/>
                        <label htmlFor="floatingPassword">Start Time</label>
                </div>
                <div className="form-floating">
                        <input  onChange={handleChange} type="time" className="form-control"  placeholder="End" required name="EndTime"/>
                        <label htmlFor="floatingPassword">End Time</label>
                </div>
                <div className="checkbox mb-3">
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Add slot</button>
            </form>
        </div>
    );
}
export default AddInterviewSlot;