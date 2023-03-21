import { Component } from "react";
import Contador from './../../../components/Contador';

export default class ContadorPage extends Component {
  
  render() {
    return (
      <div>
        <Contador valorInicial={200} passo={10} />
      </div>
    )
  }
}