import React from "react";
import { useState } from "react";

export default function Budget({ goTo }) {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => goTo("dashboard")}>← Voltar</button>

      <h2>Orçamento</h2>

      <input
        placeholder="R$"
        style={input}
        onChange={(e) => setValue(e.target.value)}
      />

      <button style={primary}>Salvar orçamento</button>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 20,
  marginTop: 20,
  borderRadius: 10
};

const primary = {
  width: "100%",
  padding: 15,
  background: "#000",
  color: "#fff",
  marginTop: 20,
  borderRadius: 10
};
