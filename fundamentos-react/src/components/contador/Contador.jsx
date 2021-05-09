import "./Contador.css"
import React from 'react'
import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"

class Contador extends React.Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.PassoInicial || 5
  }

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <div>
          <PassoForm
            passo={this.state.passo}
            setPasso={this.setPasso} />
          <Botoes
            setIncrement={this.increment}
            setDecrement={this.decrement} />
        </div>

      </div>
    )
  }
}


export default Contador