import React, { useState } from "react";
import "./NotFound.css";

export default function NotFound(){
    return(
        <div className="not-found">
                <h1>404 Page Not Found</h1>
                <p>The resource you are looking for doesn't exist, make sure you typed in the link correctly and try again.</p>
        </div>
    );
}