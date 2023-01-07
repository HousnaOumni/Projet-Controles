import React  from 'react';

class ChangerVal extends React.Component{
    constructor(){
        super();
        this.state = {val:35,couleur:{color:"yellow"}}
    }

    handleChange(){
        this.setState({ val:this.state.val % 5 === 0 ? this.state.val + 2: this.state.val - 2 ,
        couleur:this.state.val % 5 === 0 ? {color:"blue"} : null})
    }

    render(){
        return(
            <div>
                <div style={this.state.couleur}>{this.state.val}</div>
                <button onClick={() => this.handleChange()}>Changer</button>
            </div>
        )
    }
}
export default ChangerVal;