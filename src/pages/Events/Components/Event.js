import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Event(props){
    return(
        <div>
            <article className="eventcard light blue">
                <a className="eventcard__img_link" href="#">
                    <img className="eventcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                </a>
                <div className="eventcard__text t-dark">
                    <h1 className="eventcard__title blue"><a href="#">{props.title}</a></h1>
                    <div className="eventcard__subtitle small">
                        <time>
                            <i className="fas fa-calendar-alt mr-2"></i>{props.date}
                        </time>
                    </div>
                    <div className="eventcard__bar"></div>
                    <div className="eventcard__preview-txt">{props.description}</div>
                    <ul className="eventcard__tagbox">
                        <li className="tag__item"><i className="fas fa-tag mr-2"></i>{props.location}</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>{props.admitting}</li>
                        <li className="tag__item play blue">
                            <a href="#"><i className="fas fa-play mr-2"></i>Know more</a>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default Event;