import React from 'core-js/library/fn/reflect/es7/metadata'
import If from './If'

export default propos => {
  const usuario = props.usuario || {}
  return (
    <div>
      <If test= {usuario && usuario.nome}>
        Seja bem vindo <strong>{props.usuario.nome}</strong>
      </If>
    </div>
  )
}