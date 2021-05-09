import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
  return (
    <div>
      <DiretaFilho
        texto="Filho 1"
        numero={1}
        bool={false} />

      <DiretaFilho
        texto="Filho 21"
        numero={31}
        bool={true} />
    </div>
  )
}