import React, { Component } from "react";

class Vent extends Component {
    constructor(props){
        super(props)
        this.state = {
            ventInput: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange(event) {
        event.preventDefault()
        console.log(event)
        this.setState({
          [event.target.name]: event.target.value
        });
      }
     
    render () {
        const {ventInput} = this.state
        return (
            <div>
                <h1>Feel free to vent, type about what has been concerning you lately, and then throw it away!</h1>
                <p>Your worries: {ventInput}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='Type your worries here' name='ventInput'/></p>
                    <p><button>Burn it!</button></p>
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
