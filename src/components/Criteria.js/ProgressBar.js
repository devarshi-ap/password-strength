import React from "react";

const ProgressBar = (props) => {
    console.log(props.passwordRating);

    let color = determineBarColor(props.passwordRating);
    return <progress className={color} value={props.passwordRating} max="100"></progress>;
}

function determineBarColor(value) {
    let color = value === 0 ? "progress is-light"
                : value < 25 ? "progress is-danger"
                : value < 50 ? "progress is-warning"
                : value < 75 ? "progress is-info"
                : value < 100 ? "progress is-primary" : "progress is-success";
    return color;
}

export default ProgressBar 
