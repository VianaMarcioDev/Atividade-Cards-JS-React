import React from "react";
import "./App.css";

import Primeiro from "./components/layout/Primeiro";
import ComParametro from "./components/layout/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repetição from "./components/layout/Repetição";
import Condicional from "./components/layout/Condicional";
import CondicionalComIf from "./components/layout/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/direta/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";


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
            <li>André</li>
            <li>Maga</li>
            <li>Vinicius</li>
            <li>Eliseu</li>
            </ul>
        </ComFilhos>
    </Card>
      
    <Card titulo="Repetição">
            <Repetição/>
    </Card>

    <Card titulo="Condicional">
            <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="CondicionalComIf">
        <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>

    <Card titulo="Primeiro Exercicio">
      <Primeiro></Primeiro>
      <ComParametro
        titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"
      ></ComParametro>
    </Card>

    <Card titulo="Comunicacao Direta">
        <Pai></Pai>
    </Card>

    <Card titulo="Comunicação indireta">
        <Super></Super>
    </Card>

    <Card titulo="Input">
        <Input></Input>
    </Card>

    <Card titulo="Contador">
        <Contador passo={10} valor={100}></Contador>
    </Card>
  </div>
);
