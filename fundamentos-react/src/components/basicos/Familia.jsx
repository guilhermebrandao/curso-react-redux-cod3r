
import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
  return (
    <div>
      <FamiliaMembro nome="Abigail" sobrenome="Ferreira" />
      <FamiliaMembro nome="Eva" sobrenome="Ferreira" />
      <FamiliaMembro nome="Pedro" sobrenome="Ferreira" />
    </div>
  )
}