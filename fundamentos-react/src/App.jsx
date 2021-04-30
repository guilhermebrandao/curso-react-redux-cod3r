import React from 'react'
import './App.css'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Familia from './components/basicos/Familia'

export default _ =>
  <div id="app">
    <h2>Fundamentos React</h2>

    <div className="Cards">
      <Card
        titulo="#05 - Familia"
        color="#00C8F8">
        <Familia sobrenome="Ferreira" />
      </Card>

      <Card
        titulo="#04 - Aleatorio"
        color="#FA6900">
        <Aleatorio
          min={1}
          max={60} />
      </Card>

      <Card
        titulo="#03 - Fragmento"
        color="#E94C6F">
        <Fragmento />
      </Card>

      <Card
        titulo="#02 - ComParametro"
        color="#E8B71A">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="Muito legal!!" />
      </Card>

      <Card
        titulo="#01 - ComParametro"
        color="#588C73">
        <Primeiro />
      </Card>
    </div>

  </div>