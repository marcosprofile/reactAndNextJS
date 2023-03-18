import If from "../../../components/If";

export default function condicional2() {
  const numero = 11
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>O número {numero} é par</h1>
      </If>
      <If teste={numero % 2 !== 0}>
        <h1>O número {numero} é impar</h1>
      </If>
    </div>
  )
}