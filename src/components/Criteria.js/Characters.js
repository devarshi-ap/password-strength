import React from "react";

const Characters = (props) => {
    return(
        <div id="characters" className="report-items">
            Characters: {props.password.length}
        </div>
    );
}

export default Characters 
