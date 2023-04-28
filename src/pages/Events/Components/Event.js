import { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {isCurrentUserAdmin, getToken, get} from "../../../connection";

function Event(props){
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(function(){
        const token = getToken();
        get({
            route:"/isregistered/"+props.id+"/"+token.id,
            callback:(response) => {
                setIsRegistered(response.data.isRegistered);
            },
        });
    },[]);
    return(
        <div>
            <article className="eventcard">
                <a className="eventcard__img_link event_link" href={"/Events/"+props.title}>
                    <img className="eventcard__img" src={props.src} alt="Image Title" />
                </a>
                <div className="eventcard__text t-dark">
                    <h1 className="eventcard__title blue"><a className="event-link" href={props.title}>{props.title}</a></h1>
                    <div className="eventcard__subtitle small">
                        <time>
                            <i className="fas fa-calendar-alt mr-2"></i>{props.date}
                        </time>
                    </div>
                    <div className="eventcard__bar"></div>
                    <div className="eventcard__preview-txt">{props.description}</div>
                    <ul className="eventcard__tagbox">
                        <li className="tag__item">{props.location}</li>
                        <li className="tag__item">{props.admitting}</li>
                        {props.admitting == "Admitting" ? <>
                        {isRegistered ? 
                        <li className="tag__item play blue">
                            <Link className="event-link" to={"/event/"+props.id+"/slots"}>Get Interview</Link>
                        </li>
                        : 
                        <li className="tag__item play blue">
                            <Link className="event-link" to={"/event/"+props.id+"/register"}>Apply Now</Link>
                        </li>}
                        {isCurrentUserAdmin() ? <li className="tag__item play blue">
                            <Link className="event-link" to={"/event/"+props.id+"/slots/add"}>Add Interview Slots</Link>
                        </li> : <></>}
                        </> : <></>}
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default Event;