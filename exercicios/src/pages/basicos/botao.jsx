function acao1() {
  alert('ação 1');
}

export default function botao() {
  function acao2() {
    alert('ação 2');
  }

  function acao5(e) {
    console.log(e)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "40px" }}>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button onClick={function() {
        alert('ação 3')
      }}>Click #03</button>
      <button onClick={() => alert('ação 4')}>Click #04</button>
      <button onClick={acao5}>Click #05</button>
      <input type="text" onChange={e => console.log(e.target.value)} />
    </div>
  )
}