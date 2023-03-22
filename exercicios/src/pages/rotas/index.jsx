import Link from "next/link"
import { useRouter } from 'next/router';

export default function rotas() {
  const router = useRouter();


  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 20,
        nome:'João'
      }
    })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Rotas / Index</h1>
      <ul>
        <Link href="/rotas/params?id=20&nome=Joao">
          <li>João</li>
        </Link>
        <Link href="/rotas/155/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/14/Marcos">
          <li>Marcos</li>
        </Link>
      </ul>
      <div style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "8px",
        gap: "8px"
      }}>
        <button onClick={navegacaoComParams}>João</button>
        <button onClick={() => router.push("/rotas/155/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/14/Marcos")}>Marcos</button>
      </div>
    </div>
  )
}