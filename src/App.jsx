import React from "react";
import "./App.css";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repetição from "./components/Repetição";

export default (props) => (
  <div className="App">
    <Card titulo="Primeiro Componente">
      <Primeiro />
    </Card>

    <Card titulo="Segundo Componente">
        Conteudo
    </Card>

    <Card titulo="Com filhos">
        <ComFilhos>
            <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card>
      
    <Card titulo="Repetição">
            <Repetição/>
    </Card>
    
    <Card titulo="Primeiro Exercicio">
      <Primeiro></Primeiro>
      <ComParametro
        titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"
      ></ComParametro>
    </Card>
  </div>
);
