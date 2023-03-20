export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "fit-content",
      fontSize: "18px",
      width: "40px",
      height: "40px",
      margin: "16px 0 6px 0",
      borderRadius: "100px",
      backgroundColor: "#222",
      color: "#FFF",
    }}>
      {props.numero}
    </div>
  )
}