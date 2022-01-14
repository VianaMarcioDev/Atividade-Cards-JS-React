import React, { Component} from "react";

export default class Contador extends Component{
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }
    inc = () => {
        this.setState({
            valor: this.state.valor + 1
        })
        
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - 1
        })
        
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>Valor: {this.state.valor}</h3>
                <h4>Passo: {this.state.passo}</h4>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        );
    }

}