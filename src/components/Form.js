import React from "react";
import Report from "./Report";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            type: 'password'
        }
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    toggleInputType() {
        this.setState(prevState => ({
            type: prevState.type === 'text' ? 'password' : 'text'
        }));
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="passwordField">Enter Password:</label><br />
                    <input className="input is-small" value={this.state.input} onChange={this.handleChange.bind(this)} type={this.state.type} id="passwordField" name="password" placeholder="password"/>
                    <div>
                        <span id="showPassText">Show Password</span>
                        <input type="checkbox" onClick={this.toggleInputType.bind(this)}/>
                    </div>
                </form>
                <Report password={this.state.input} />
            </div>
        );
    }
}

export default Form 