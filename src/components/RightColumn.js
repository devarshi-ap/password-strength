import React from "react";
import InfoBox from "./InfoBox";

class RightColumn extends React.Component {
    render() {

        const textOne = `Passwords provide the first line of defense against unauthorized access
        to your computer and personal info. The stronger your password,
        the more protected you will be from hackers and malicious software.`;

        return (
            <div className="column right-column">
                <div className="content centered-flex" style={{flexDirection: "column"}}>
                    <h1 className="title">How Secure is Your Password 💪</h1>

                    <InfoBox />
                    <img src="https://i.imgur.com/oLZc2J5.png" className="column-image" alt="shield"/>
                </div>
            </div>
        );
    }
}

export default RightColumn 