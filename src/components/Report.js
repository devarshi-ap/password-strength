import React from "react";
import Characters from "./Criteria.js/Characters";
import Strength from "./Criteria.js/Strength";
import CharTags from "./Criteria.js/CharTags";

const Report = (props) => {
    return(
        <div className="report">

            <Characters password={props.password}/>

            <Strength password={props.password}/>

            <br />

            <CharTags password={props.password}/>
        </div>
    );
}

export default Report 
