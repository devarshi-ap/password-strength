import React from "react";
import InfoBox from "./InfoBox";

class RightColumn extends React.Component {
    render() {

        return (
            <div className="column right-column">
                <div className="content centered-flex" style={{flexDirection: "column"}}>
                    <h1 className="title">How Secure is Your Password 💪</h1>

                    <img src="https://i.imgur.com/oLZc2J5.png" className="column-image" alt="shield"/>
                    
                    <InfoBox />
                </div>
            </div>
        );
    }
}

export default RightColumn 