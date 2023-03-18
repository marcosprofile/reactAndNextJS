import Filho from "./Filho";

export default function Pai() {
  return (
    <div>
      <Filho nome="Marcos" familia="Ferreira"/>
      <Filho nome="Thiago" familia="Albuquerque"/>
      <Filho nome="Leonardo" familia="Vasconcelos"/>
    </div>
  )
}