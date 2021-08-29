import React from "react";

const InfoBox = (props) => {

    return (
        <div className="box description-box centered-flex">
            <p className="description">
            Passwords provide the first line of defense against unauthorized access
            to your computer and personal info. Follow these tips to help yourself
            craft unique, complex passwords:
            </p>

            <ul className="description">
                <li>1. make your password long (10-15 characters)</li>
                <li>3. don't recycle passwords</li>
                <li>4. avoid words that can be found in a dictionary</li>
                <li>5. include special characters (numbers, _, .)</li>
            </ul>
        </div>
    );
}

export default InfoBox 