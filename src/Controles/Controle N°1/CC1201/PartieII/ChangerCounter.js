import React from 'react';

class ChangerCounter extends React.Component{
    constructor(){
        super();
        this.state = {counter:12}
    }

 /*    handleChange(){
        this.setState({ counter:this.state.counter % 2 == 0 ? this.state.counter / 2 : this.state.counter * 3 + 1})
    } */

    handleChange(){
        this.state.counter % 2 === 0 ?
        this.setState({ counter: this.state.counter / 2}) :this.setState({counter: this.state.counter * 3 + 1})
    }

    render(){
        return(
            <div>
                <p>la valeur de Counter{this.state.counter}</p>
                <button onClick={() => this.handleChange()}>Calculer</button>
            </div>
        )
    }
}
export default ChangerCounter;