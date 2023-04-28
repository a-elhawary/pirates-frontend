import React, { useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EventRegistration.css';
import logo from '../../assets/logo.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import {getToken, post} from "../../connection";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function EventRegistration() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [imageUni, setUniversity] = useState({});
    const [imageNat, setNational] = useState({});

    useEffect(function(){
        const token = getToken();
        if(token == false){
            alert("You have to create an account first");
            navigate("/register");
        }
    }, []);

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

        // retrieve email and eventID from local storage and append it to formData
        // const email = localStorage.getItem('email');
        // const eventID = localStorage.getItem('eventID');
        const token = getToken();
        var pathname = window.location.pathname
        const email = token.email;
        const eventID = pathname.split("/")[2];

        formData.append('email', email);
        formData.append('eventID', eventID);

        post({
            route:"/EventRegistration",
            data:formData,
            callback:(response)=>{
                if (response.data.success) {
                    // handle successful upload
                    Swal.fire({
                        title: 'Success',
                        text: 'File uploaded successfully. Click OK to go to continue registration.',
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = '/event/'+eventID+"/slots";
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
            }
        });
    };

    return (
    <div className="event-registration">
      <Header />
      <div className="event-registration-main form-signin m-auto">
        <form onSubmit={handleSubmit}>
          <img className="mb-4" src={logo} alt="Pirates-logo" width="80%" />
                    <h1 className="h3 mb-3 fw-normal">Additional Data Needed</h1>

                    <div className="form-floating">
                        <input onChange={handleUni} type="file" accept="image/*" className="form-control"/>
                        <label className="FileName" htmlFor="floatingInput">Picture of University ID</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={handleNat} type="file" accept="image/*" className="form-control"/>
                        <label className="FileName" htmlFor="floatingPassword">Picture of National ID</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    <p className="mt-5 mb-3">Change of plans? <Link to="/events">Events Page</Link></p>
                </form>

            </div>
            <Footer/>

        </div>
    );
}

export default EventRegistration;

