import React from "react";
import Form from "./Form";

class LeftColumn extends React.Component {
    render() {
        return (
            <div className="column centered-flex left-column">
                <div className="box container" style={{maxWidth: "70%"}}>
                    <Form />
                </div>
            </div>
        );
    }
}

export default LeftColumn 