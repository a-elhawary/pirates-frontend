import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Events.css"
import Event from "./Components/Event";
import {isCurrentUserAdmin, get, backend_url} from "../../connection";
import {useState, useEffect} from "react";

function Events(){
    const [data,setData] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        // get page data
        get({
            route: "/events",
            callback: function (response) {
                setData(response.data);
            }
        });

        // find user role
        setIsAdmin(isCurrentUserAdmin());

    },[]);

    return(
        <>
            <Header/>
        <div className = "Events">
            <section className="light">
                <div className="container py-2 text-dark">
                    <div className="events-title">
                        <span className="h1 text-center" id="pageHeaderTitle">Events</span>
                        {isAdmin ? <a href="events/create" className="admin-cta">Add Event</a> : <></>}
                    </div>

                    {data.map((dataItem,index)=>{
                        
                        var d = new Date(dataItem.Date);
                        var readableDate=d.toLocaleString("en-IN");
                        if(dataItem.isShown == 1)
                        {return(
                            <Event title={dataItem.Name}
                                key = {index}
                                id = {dataItem.ID}
                                date = {readableDate}
                                description={dataItem.Description.substring(0, 100) + " ..."}
                                location={dataItem.Location}
                                admitting={dataItem.isAdmitting == 1 ? "Admitting" : "Closed"}
                                src={backend_url+dataItem.Image}
                            />
                        );}
                        else{
                            return(<div></div>);
                        }
                    })}
                </div>
            </section>
        </div>
            <Footer />
        </>
    );
}

export default Events;