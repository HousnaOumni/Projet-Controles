import React from "react";
export default class Loisir extends React.Component{
    constructor(props){
        super(props);
        this.state={loisirs: ["FootBall","Lecture","Voyage"],newLoisir:""}
    }
    
    AddLoisir() {
        //const prev = [...this.state.loisirs];
        const newL = this.state.newLoisir;
        //this.setState({loisirs: prev.push(newL)})
        this.setState({loisirs : [...this.state.loisirs,newL]})
 
    }
   
    deleteLoisir(index){
        const res = this.state.loisirs.filter((lo,ind) => ind!== index);
        this.setState({loisirs:res})
    }
    
    render(){
        return(
           <div>
               <form onSubmit={(e)=> e.preventDefault()}>
                   <input type="text" name="newLoisir" 
                          value={this.state.newLoisir}
                          onChange = {(e) => this.setState({newLoisir:e.target.value})}
                          placeholder="Entrer un nouveau loisir" />
                    <button onClick={() => this.AddLoisir()}>Ajouter Loisir</button>
                </form>
                <div>
                        {this.state.loisirs.map((l,index) => {
                            return(
                            <div key={index}>
                                {l}
                               <button onClick={() => this.deleteLoisir(index)}>Supprimer Loisir</button>
                            </div>
                            )
                        })}
                </div>
           </div>

        )
    }
}