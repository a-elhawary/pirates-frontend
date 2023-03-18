import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddEvent.css';
import axios from 'axios';
/** WhAT THE FUCK IS THESE IMPORTS? */
function AddEvent(){ /** WHAT THE FUCK IS set? */
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Location, setLocation] = useState("");
    const [Image, setImage] = useState("");
    const [Date, setDate] = useState("");
    const [isShown, setisShown] = useState("");
    const [isAdmitting, setisAdmitting] = useState("");

    const [inputs,setInputs] = useState({});

    const handleChange = (event) => { /** I Don't Know Where To Use This */
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleSelect = (event) => { /** I Don't Know Where To Use This */
        const name = event.target.name;
        const id = event.target.id;

        var value = document.getElementById(id).value;

        setInputs(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:80/AddEvent',inputs); /** Replace AddEvent by the right name */
        console.log(inputs);
    }
/** I Copy Pasted The Body Of The HTML & Editied The Form Action */
return(
    <div class="container">
        <div class="title">Add Your Event</div>
        <div class="content">
            <form onSubmit={handleSubmit}>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Event Name</span>
                        <input type="text" name="Name" placeholder="Enter the Name" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Event Location</span>
                        <input type="text" name="Location" placeholder="Enter the Location" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Event Date and Time</span>
                        <input type="datetime-local" name="Date" placeholder="Pick a Date" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Event Image URL</span>
                        <input type="url" name="Image" placeholder="Enter the URL" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Event Description</span>
                        <textarea name="Description" required></textarea>
                    </div>
                </div>
                <div class="check">
                    <span class="show">Show The Event on Events Page?</span>
                    <input type="checkbox" name="isShown"/>
                </div>
                <div class="check">
                    <span class="show">Can Students Apply Now?</span>
                    <input type="checkbox" name="isAdmitting"/>
                </div>
                <div class="button">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </div>
);
}
/** DO I HAVE TO EDIT ANY OTHER FILES? */
export default AddEvent;