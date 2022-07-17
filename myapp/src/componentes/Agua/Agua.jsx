import React from "react";
import "./Agua.css"

function Agua(props) {
    return (
        <div className="agua" data-temperatura={props.temperatura}>
            {props.temperatura}
        </div>
    );
}

export default Agua;