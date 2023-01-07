import React  from 'react';

class ChangerIsVal extends React.Component{
    constructor(){
        super();
        this.state = {isVal:9,text:''}
    }

 /*    handleChange(){
        this.setState({ isVal:this.state.isVal % 3 == 0 ? this.state.isVal * 2: this.state.isVal  ,
        text:this.state.isVal % 3 == 0 ? `${this.state.isVal} est un multiple de 3` : `${this.state.isVal} n'est pas un multiple de 3`})
    } */

    handleChange(){
        this.state.isVal % 3 === 0 ?
        this.setState({ isVal: this.state.isVal * 2,text: `${this.state.isVal} est un multiple de 3`})
        :this.setState({isVal:this.state.isVal ,text: `${this.state.isVal} n'est pas un multiple de 3`})
    }

    render(){
        return(
            <div>
                <h1>{this.state.isVal}</h1>
                <p>{this.state.text}</p>
                <button onClick={() => this.handleChange()}>Changer</button>
            </div>
        )
    }
}
export default ChangerIsVal;