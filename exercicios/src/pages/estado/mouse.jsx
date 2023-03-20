import { useState } from "react";

export default function mouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  
  const estilo = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#FFF",
    height: "100vh"
  }

  function quandoMover(ev) {
    setX(ev.clientX)
    setY(ev.clientY)
  }
  
  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}