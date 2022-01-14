import React from "react";
import Sub from './Sub'

export default props => {

    function quandoClicar(valorgerado){
        console.log('Ação!')
        console.log(valorgerado)
    }

    return(
        <div>
        <h4>Valor</h4>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
    );
}
    