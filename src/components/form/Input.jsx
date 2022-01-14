import React, {useState} from "react";

export default props => {
    const[nome, alteraNome] = useState('Márcio')
    
    return(
        <>
        <h1>{nome}</h1>
        <input type="text" value={nome} onChange={e => alteraNome(e.target.value)}/>
        </>
    );
};