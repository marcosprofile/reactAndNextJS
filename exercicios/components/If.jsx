export default function If(props) {
  const teste = props.teste
  
  return teste ? props.children : null
}