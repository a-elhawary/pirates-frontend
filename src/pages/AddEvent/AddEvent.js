import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddEvent.css';
import axios from 'axios';
import dateFormat, { masks } from "dateformat";
/** WhAT THE FUCK IS THESE IMPORTS? */
function AddEvent(){ /** WHAT THE FUCK IS set? */



    const [inputs,setInputs] = useState({});
    masks.DBFormat = 'yyyy-mm-dd"T"H:MM';


    var now = new Date();
    
    const min = dateFormat(now,"DBFormat");
    now.setFullYear(now.getFullYear() + 5);
    const max = dateFormat(now,"DBFormat");
    console.log(min);


  

    const handleChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleCheck = (event) => { 
        const name = event.target.name;
        const checked = event.target.checked;


        setInputs(values => ({...values,[name]: checked}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:80/addevents',inputs);
        console.log(inputs);
    
    }
    
return(
    <div class="container">
        <div class="title">Add Your Event</div>
        <div class="content">
            <form onSubmit={handleSubmit}>
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
                        <span class="details">Event Image URL</span>
                        <input onChange={handleChange} type="url" name="Image" placeholder="Enter the URL" required/>
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
);
}
export default AddEvent;