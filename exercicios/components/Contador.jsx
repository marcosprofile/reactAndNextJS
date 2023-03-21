import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  alterarPasso = (ev) => {
    this.setState({ passo: +ev.target.value })
  }

  renderForm() {
    return (
      <>
        <input
          type="number" min="1" max="1000"
          value={this.state.passo}
          onChange={this.alterarPasso}
        />
        <div style={{display: "flex", gap: "4px"}}>
          <button style={{width: "16px"}} onClick={this.dec} > - </button>
          <button style={{width: "16px"}} onClick={this.inc} > + </button>
        </div>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Contador (Usando classe)</h1>
        <h2>{this.state.numero}</h2>
        {this.renderForm()}
      </div>
    )
  }
}