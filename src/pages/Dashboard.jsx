import React, { useEffect, useState } from "react";

export default function Dashboard({ goTo }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  // cálculos
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const total = income - expense;

  return (
    <div style={container}>
      <h3 style={{ color: "#777" }}>Saldo Disponível</h3>
      <h1>R$ {total.toFixed(2)}</h1>

      <div style={cardRed}>
        <p>Gasto no mês</p>
        <h2>R$ {expense.toFixed(2)}</h2>
      </div>

      <div style={cardGreen}>
        <p>Entradas</p>
        <h2>R$ {income.toFixed(2)}</h2>
      </div>

      <button style={primary} onClick={() => goTo("new")}>
        + Nova transação
      </button>

      <button style={secondary} onClick={() => goTo("summary")}>
        Ver resumo
      </button>
    </div>
  );
}

const container = {
  padding: 20,
  maxWidth: 400,
  margin: "auto"
};

const cardRed = {
  background: "#ffe5e5",
  padding: 20,
  borderRadius: 15,
  marginTop: 20
};

const cardGreen = {
  background: "#e5ffe5",
  padding: 20,
  borderRadius: 15,
  marginTop: 10
};

const primary = {
  width: "100%",
  padding: 15,
  background: "#000",
  color: "#fff",
  borderRadius: 10,
  marginTop: 20
};

const secondary = {
  width: "100%",
  padding: 15,
  background: "#eee",
  borderRadius: 10,
  marginTop: 10
};
