import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Events.css"
import Event from "./Components/Event";

function Events(){
    return(
        <div>
        <section className="light">
	        <div className="container py-2 text-dark">
		        <h1 className="h1 text-center" id="pageHeaderTitle">Events</h1>
                <Event title="Lmeena el kofar"
                    date = "Mon 25th May, 2023"
                    description="w 3mlna 7fla nar"
                    location="on campus"
                    admitting="admitting"
                />
                <Event title="Lmeena el kofar"
                    date = "Mon 25th May, 2023"
                    description="w 3mlna 7fla nar"
                    location="on campus"
                    admitting="admitting"
                />
                <Event title="Lmeena el kofar"
                    date = "Mon 25th May, 2023"
                    description="w 3mlna 7fla nar"
                    location="on campus"
                    admitting="admitting"
                />
            </div>
            </section>
        </div>
    );
}

export default Events;