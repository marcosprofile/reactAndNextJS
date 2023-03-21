export function Comp1() {
    return <h2 style={{ color: "blue" }}>Comp #01</h2>
  }
  
  export const Comp2 = function() {
    return <h2 style={{ color: "yellow" }}>Comp #02</h2>
  }
  
  export default function Comp3() {
    return (
      <div>
        <h2 style={{ color: "crimson" }}>Comp #03</h2>
      </div>
    )
  }
  
  export const Comp4 = () => {
    return <h2 style={{ color: "purple" }}>Comp #04</h2>
  }
  
  export const Comp5 = () => <h2 style={{ color: "aqua" }}>Comp #05</h2>
  
  export const Comp6 = props => (
    <div>
      <h2 style={{ color: "indigo" }}>Comp #06 - {props.msg}</h2>
    </div>
  )