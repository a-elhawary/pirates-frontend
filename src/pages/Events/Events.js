import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Events.css"
import Event from "./Components/Event";
import axios from 'axios';

function Events(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:80/events')
        .then(function (response) {
            setData(response.data);
        })
    },[]);

    return(
        <div>
            <section className="light">
                <div className="container py-2 text-dark">
                    <h1 className="h1 text-center" id="pageHeaderTitle">Events</h1>

                    {data.map((dataItem,index)=>{
                        
                        var d = new Date(dataItem.Date);
                        var readableDate=d.toLocaleString("en-IN");
                        if(dataItem.isShown == 1)
                        {return(
                            <Event title={dataItem.Name}
                                date = {readableDate}
                                description={dataItem.Description}
                                location={dataItem.Location}
                                admitting={dataItem.isAdmitting == 1 ? "Admitting" : "Clossed"}
                                src={dataItem.Image}
                            />
                        );}
                        else{
                            return(<div></div>);
                        }
                    })}
                </div>
            </section>
        </div>
    );
}

export default Events;