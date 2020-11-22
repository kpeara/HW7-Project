import React, { Component } from "react";

class Vent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { ventInput } = this.state
        return (
            <div>
                <h1>Feel free to vent, type about what has been concerning you lately, and then throw it away!</h1>
                <p>Your worries: {this.state.value}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='Type your worries here' value={this.state.value} onChange={this.handleChange} /></p>
                    <p><input type='submit' value='Burn it!' /></p>
                </form>
            </div>
        )

    }

}


/*function Vent() {
    return <h1>Vent</h1>;



}
*/
export default Vent;
