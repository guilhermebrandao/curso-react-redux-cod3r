import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

  let nome = '?'
  let idade = 0
  let nerd = false

  function fornecerInformacoes(nome, idade, nerd) {
    nome = nome
    idade = idade
    nerd = nerd
    console.log(nome, idade, nerd)
  }

  return (
    <div>
      <div>Pai</div>
      <span>{nome} </span>
      <span>{idade} </span>
      <span>{nerd ? 'Verdadeiro' : 'Falso'}!</span>

      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  )
}