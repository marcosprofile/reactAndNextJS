import listaProdutos from "../../../data/listaProdutos"

export default function repeticao2() {

  function renderizarLinhas() {
    return listaProdutos.map(produto => {
      return (
        <tr key={produto.id}>
          <td style={{ border: '1px solid #299', width: '50px', textAlign: 'center' }}>{produto.id}</td>
          <td style={{ border: '1px solid #299', width: '120px' }}>{produto.nome}</td>
          <td style={{ border: '1px solid #299', width: '80px', textAlign: 'center' }}>{produto.preco}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table style={{ border: '1px solid #299'}}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}
