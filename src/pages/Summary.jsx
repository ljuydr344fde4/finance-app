import React, { useEffect, useState } from "react";

export default function Summary({ goTo }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const total = income - expense;

  return (
    <div style={container}>
      <button style={back} onClick={() => goTo("dashboard")}>
        ← Voltar
      </button>

      <h2>Resumo</h2>

      <div style={cardGreen}>
        <p>Entradas</p>
        <h3>R$ {income.toFixed(2)}</h3>
      </div>

      <div style={cardRed}>
        <p>Gastos</p>
        <h3>R$ {expense.toFixed(2)}</h3>
      </div>

      <div style={card}>
        <p>Saldo</p>
        <h2>R$ {total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

const container = {
  maxWidth: 400,
  margin: "auto",
  padding: 20
};

const card = {
  background: "#eee",
  padding: 20,
  borderRadius: 15,
  marginTop: 10
};

const cardGreen = {
  background: "#e5ffe5",
  padding: 20,
  borderRadius: 15,
  marginTop: 10
};

const cardRed = {
  background: "#ffe5e5",
  padding: 20,
  borderRadius: 15,
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