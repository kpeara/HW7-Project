import React, { Component } from "react";

import "./vent.css";

const FADE_DURATION = 1000;

class Vent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",

            fadeTransition: null,
            fadeState: "fade-in",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBurnSubmit = this.handleBurnSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            fadeState: "fade-in",
            value: event.target.value,
        });
    }

    handleBurnSubmit(event) {
        alert("the burn it button was pressed with text: " + this.state.value);
        // Create a timer that runs after quote
        // fades out
        this.setState({
            fadeState: "fade-out",
            value: "",
        });
        event.preventDefault();
    }

    render() {
        const { ventInput } = this.state;
        return (
            <div className="container mt-4">
                <h1>
                    Feel free to vent, type about what has been concerning you
                    lately, and then throw it away!
                </h1>
                <div className="box">
                    <div
                        className={`fade-wrapper ${this.state.fadeState}`}
                        style={{ transitionDuration: `${FADE_DURATION}ms` }}
                    >
                        <p>Your note: </p>
                        <div className="note">{this.state.value}</div>
                    </div>
                </div>
                <form className="mt-4" onSubmit={this.handleBurnSubmit}>
                    <p>
                        <input
                            className="input"
                            type="text"
                            placeholder="Type your worries here"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            className="button mt-4 is-danger"
                            type="submit"
                            value="Burn it!"
                        />
                    </p>
                </form>
            </div>
        );
    }
}

/*function Vent() {
    return <h1>Vent</h1>;



}
*/
export default Vent;
