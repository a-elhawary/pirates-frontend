import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventRegistration.css';
import logo from '../../assets/logo.png';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function EventRegistration() {
    const [inputs, setInputs] = useState({});
    const [imageUni, setUniversity] = useState({});
    const [imageNat, setNational] = useState({});
    const [uploadStatus, setUploadStatus] = useState(null);

    function handleUni(e) {
        setUniversity(e.target.files[0]);
    }

    function handleNat(e) {
        setNational(e.target.files[0]);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('imageUni', imageUni);
        formData.append('imageNat', imageNat);
        Object.keys(inputs).forEach(function (key) {
            formData.append(key, inputs[key]);
        });
        for (const value of formData.values()) {
            console.log(value);
        }

        // retrieve email and eventID from local storage and append it to formData
        // const email = localStorage.getItem('email');
        // const eventID = localStorage.getItem('eventID');
        const email = "ahmedehab28@gmail.com";
        const eventID = "12";

        formData.append('email', email);
        formData.append('eventID', eventID);
        console.log(formData);

        axios
        .post('http://localhost:80/EventRegistration', formData)
        .then((response) => {
            if (response.data.success) {
                // handle successful upload
                Swal.fire({
                    title: 'Success',
                    text: 'File uploaded successfully. Click OK to go to the home page.',
                    icon: 'success'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/home';
                    }
                });
            } else {
                // handle unsuccessful upload
                let message = response.data.message.replace(/<br>/g, '<br>');
                Swal.fire({
                    title: 'Error',
                    html: message,
                    icon: 'error'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            }
        });
    };

    return (
    <div>
      <Header />
      <div className="LoginForm form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src={logo} alt="Pirates-logo" width="80%" />
                    <h1 className="h3 mb-3 fw-normal">Event Requirments</h1>

                    <div className="form-floating">
                        <input onChange={handleUni} type="file" accept="image/*" className="form-control"/>
                        <label className="FileName" htmlFor="floatingInput">University ID</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleNat} type="file" accept="image/*" className="form-control"/>
                        <label className="FileName" htmlFor="floatingPassword">National ID</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    <p className="mt-5 mb-3">Change of plans? <a className ='' href="">Events Page</a></p>
                </form>

            </div>
            <Footer/>

        </div>
    );
}

export default EventRegistration;

