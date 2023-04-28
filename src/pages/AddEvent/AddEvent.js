import React, { useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddEvent.css';
import dateFormat, { masks } from "dateformat";
import Header from "../../Components/Header/Header";
import {isCurrentUserAdmin, post} from "../../connection";
import {useNavigate} from "react-router-dom";

function AddEvent(){ 
    const navigate = useNavigate();

    useEffect(function (){
        var isAdmin = isCurrentUserAdmin(); 
        if(!isAdmin){
            navigate("/");
        }
    }, []);

    const [inputs,setInputs] = useState({});
    masks.DBFormat = 'yyyy-mm-dd"T"H:MM';

    var now = new Date();
    
    const min = dateFormat(now,"DBFormat");
    now.setFullYear(now.getFullYear() + 5);
    const max = dateFormat(now,"DBFormat");

    const handleChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleFile = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs(values => ({...values,[name]: value}));
    }

    const handleCheck = (event) => { 
        const name = event.target.name;
        const checked = event.target.checked;


        setInputs(values => ({...values,[name]: checked}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData();
        for(const key in inputs){
            if((key == "isShown" || key == "isAdmitting") && inputs[key] == true){
                data.append(key, 1);
            }else if(key == "isShown" || key == "isAdmitting"){
                data.append(key, 0);
            }else{
                data.append(key, inputs[key]);
            }
        }
        post({
            route:"/addevents",
            data:data,
            callback:function(){
                navigate("/events");
            }
        });
    }
    
return(
    <>
    <Header />
    <div class="AddEvent">
        <div class="add-event-container">
            <div class="add-event-title">Add Your Event</div>
            <div class="add-event-content">
                <form className="add-event-form" onSubmit={handleSubmit}>
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Event Name</span>
                            <input onChange={handleChange} type="text" name="Name" placeholder="Enter the Name" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Event Location</span>
                            <input onChange={handleChange} type="text" name="Location" placeholder="Enter the Location" required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Event Date and Time</span>
                            <input onChange={handleChange} type="datetime-local" name="Date" placeholder="Pick a Date" required min={min} max={max}/>
                        </div>
                        <div class="input-box">
                            <span class="details">Event Image</span>
                            <input onChange={handleFile} type="file" name="Image" placeholder="Enter the URL" required/>
                        </div>
                        <div class="input-box">
                            <span class="details">Event Description</span>
                            <textarea onChange={handleChange} name="Description" required></textarea>
                        </div>
                    </div>
                    <div class="check">
                        <span class="show">Show The Event on Events Page?</span>
                        <input onChange={handleCheck} type="checkbox" name="isShown"/>
                    </div>
                    <div class="check">
                        <span class="show">Can Students Apply Now?</span>
                        <input onChange={handleCheck} type="checkbox" name="isAdmitting"/>
                    </div>
                    <div class="button">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
);
}
export default AddEvent;