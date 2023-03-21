import Pessoa from "../../../components/Pessoa";

export default function exemploTS() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
    }}>
      <Pessoa nome="Marcos" />
      <Pessoa nome="João" idade={20} />
      <Pessoa nome="Maria" idade={28} />
    </div>
  )
}