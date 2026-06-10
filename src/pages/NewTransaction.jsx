import React, { useState } from "react";

export default function NewTransaction({ goTo }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSave = async () => {
    await fetch("http://localhost:8081/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: Number(amount),
        type: type
      })
    });

    alert("Transação salva ✅");
    goTo("dashboard");
  };

  return (
    <div style={container}>
      <button style={back} onClick={() => goTo("dashboard")}>
        ← Voltar
      </button>

      <h2>Nova Transação</h2>

      <input
        placeholder="Valor (R$)"
        style={input}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        style={input}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Gasto</option>
        <option value="income">Entrada</option>
      </select>

      <button style={primary} onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
}

const container = {
  maxWidth: 400,
  margin: "auto",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 10
};

const input = {
  padding: 15,
  borderRadius: 10,
  border: "1px solid #ccc",
  fontSize: 16
};

const primary = {
  padding: 15,
  background: "#000",
  color: "#fff",
  borderRadius: 10,
  border: "none",
  marginTop: 10
};

const back = {
  background: "none",
  border: "none",
  fontSize: 16,
  marginBottom: 10,
  cursor: "pointer"
};
``