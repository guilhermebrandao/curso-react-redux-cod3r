import React from 'react'

export default props => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={_ => props.quandoClicar('Carlos', '20', false)}>
        Fornecer Informações
        </button>
    </div>
  )
}