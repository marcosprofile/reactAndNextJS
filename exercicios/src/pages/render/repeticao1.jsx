export default function Repeticao1() {
  const listaAprovados = [
    'João',
    'Maria',
    'Ana',
    'Bia',
    'Carlos',
    'Daniel',
    'Marcos'
  ];

  /* function renderizarLista() {
    const itens = []

    for (let i = 0; i < listaAprovados.length; i++) {
      itens.push(<li key={i}>{listaAprovados[i]}</li>)
    }

    return itens
  } */

  function renderizarLista() {
    return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
  }

  return (
    <ul>
      {renderizarLista()}
    </ul>
  )
}