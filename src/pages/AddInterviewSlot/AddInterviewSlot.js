import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddInterviewSlot.css';
import Header from  '../../Components/Header/Header'
import Footer from  '../../Components/Footer/Footer'
import {post} from "../../connection";


function AddInterviewSlot(){ 
    const [inputs,setInputs] = useState({});
    useEffect(function(){
        var pathname = window.location.pathname;
        const name = "EventID" 
        const value = pathname.split("/")[2];

        setInputs(values => ({...values,[name]: value}));
        var token = JSON.parse(localStorage.getItem("pirates-token"));
        setInputs(values => ({...values,["AdminID"]: token.id}));
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        post({
            route:"/AddInterviewSlot",
            data:inputs,
            callback:(response)=>{
                alert("added " + response.data.count + " slots");
            }
        });
    }
    
    return(
        <div>
        <Header/>
        <div className="AddInterviewSlot">
        
            <div className="form-addslot w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <h1 style={{textAlign: "center"}} className="h2 mb-3 fw-normal">Add Interview Slots</h1>

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
                    <div className="form-floating">
                            <input  onChange={handleChange} type="text" className="form-control"  placeholder="InterviewTime" required name="InterviewTime"/>
                            <label htmlFor="floatingPassword">Interview Time (mins)</label>
                    </div>
                    <div className="checkbox mb-3">
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Add slot</button>
                </form>
            </div>
            
        </div>
        <Footer/>
        </div>
    );
}
export default AddInterviewSlot;