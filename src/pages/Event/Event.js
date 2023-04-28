import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Eventcomp from "../Events/Components/Event";
import "./Event.css"
import {get, backend_url} from "../../connection";

function Event() {
    var readableDate
    const [data,setData] = useState([]);
    var pathname = window.location.pathname
    pathname = pathname.substring(pathname.lastIndexOf("/"))
    useEffect(()=>{
        get({
            route: "/event" + pathname,
            callback:(response)=>{
                setData(response.data[0]);
            }
        });
    },[]);
    
    var d = new Date(data.Date);
    readableDate=d.toLocaleString("en-IN");
    console.log(pathname);

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
                                src={backend_url+data.Image}
                            />
                                <div>
            <article className="eventcard light blue">

                <div className="eventcard__text t-dark">
                    <h1 className="eventcard__title blue">Description</h1>
                    <div className="eventcard__subtitle small">
                    </div>
                    <p>{data.Description}</p>
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