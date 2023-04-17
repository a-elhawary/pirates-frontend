import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Eventcomp from "../Events/Components/Event";
import axios from 'axios';
import "./Event.css"

function Event() {

    const [data,setData] = useState([]);
    var pathname = window.location.pathname
    pathname = pathname.substring(pathname.lastIndexOf("/"))
    const URL = "http://localhost:80/event" + pathname
    useEffect(()=>{
        axios.get(URL)
        .then(function (response) {
            setData(response.data[0]);
            
        })
    },[]);
    
    var d = new Date(data.Date);
    var readableDate=d.toLocaleString("en-IN");
  
    

    return(
        <div className="Event">
        <Header/>
            <section className="light">
                <div className="container py-2 text-dark">
                    <h1 className="h1 text-center" id="pageHeaderTitle">Events</h1>
                            <Eventcomp title={data.Name}
                                date = {readableDate}
                                description=""
                                location={data.Location}
                                admitting={data.isAdmitting == 1 ? "Admitting" : "Closed"}
                                src={data.Image}
                            />
                                <div>
            <article className="eventcard light blue">

                <div className="eventcard__text t-dark">
                    <h1 className="eventcard__title blue">Description</h1>
                    <div className="eventcard__subtitle small">
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at nulla non mi consequat aliquam. Aliquam semper fringilla enim et maximus. Maecenas imperdiet porta nisi vitae porttitor. Etiam non ultrices odio. Sed consectetur tortor eget viverra vestibulum. Aliquam id pulvinar ligula. Morbi nec mi eget dui aliquet ullamcorper sed eget risus. Aenean eu ornare libero, sed accumsan nisl. Quisque ac interdum quam, ut consequat neque. Ut id arcu et eros placerat imperdiet sed quis diam. Sed eu dui sagittis, elementum ex non, dictum neque. Ut ipsum odio, fringilla id commodo a, ornare a mi. Phasellus tincidunt massa sit amet est euismod dignissim. Praesent ac nibh vel nisl gravida luctus.</p>
                    {/* <button class="button-28" role="button">Apply Now!</button> */}
                    <input class="btn btn-primary" type="button" value="Apply!"/>
                </div>
            </article>
            </div>
                </div>
            
            </section>
        <Footer/>
        </div>
        
    );
}

export default Event ;