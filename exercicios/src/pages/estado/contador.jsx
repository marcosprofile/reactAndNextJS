import { useState } from 'react';
import ContadorDisplay from '../../../components/ContadorDisplay';

export default function contador() {
  const [numero, setNumero] = useState(0)

  const inc = () => setNumero(numero + 1)
  const dec = () => setNumero(numero - 1)
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button style={{marginRight: "4px", width: "18px" }} onClick={dec}>-</button>
        <button style={{ width: "18px"}} onClick={inc}>+</button>
      </div>
    </div>
  )
}