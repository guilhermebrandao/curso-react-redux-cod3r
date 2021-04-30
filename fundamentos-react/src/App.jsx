import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
  <div id="app">
    <h2>Fundamentos React</h2>
    <Fragmento />
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="Muito legal!!" />
    <Primeiro />
  </div>