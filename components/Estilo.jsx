export default function Estilo(props) {
  return (
    <div>
      <h1 className={props.numero >= 0 ? "azul" : "vermelho"}>
        Texto
      </h1>
    </div>
  )
}