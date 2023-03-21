import
  Padrao, { Comp1 as Componente1, Comp2, Comp4, Comp5, Comp6 }
from "../../../components/modulo/funcionais";

export default function teste() {
  return (
    <div>
      <Componente1 />
      <Comp2 />
      <Padrao />
      <Comp4 />
      <Comp5 />
      <Comp6 msg="MSG de demonstração!!!"/>
    </div>
  )
}