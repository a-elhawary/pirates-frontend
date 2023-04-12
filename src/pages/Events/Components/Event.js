import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Event(props){
    return(
        <div>
            <article className="eventcard light blue">
                <a className="eventcard__img_link" href={"/Events/"+props.title}>
                    <img className="eventcard__img" src={props.src} alt="Image Title" />
                </a>
                <div className="eventcard__text t-dark">
                    <h1 className="eventcard__title blue"><a href={props.title}>{props.title}</a></h1>
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
                        <li className="tag__item play blue">
                            <a href={props.title}>Know more</a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default Event;