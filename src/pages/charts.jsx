import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Charts({ goTo }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(() => setTransactions([])); // ✅ evita crash
  }, []);

  // ✅ evita erro se estiver vazio
  const income = transactions
    .filter(t => t?.type === "income")
    .reduce((sum, t) => sum + (t?.amount || 0), 0);

  const expense = transactions
    .filter(t => t?.type === "expense")
    .reduce((sum, t) => sum + (t?.amount || 0), 0);

  const data = [
    { name: "Entradas", value: income },
    { name: "Gastos", value: expense }
  ];

  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div style={container}>
      <button style={back} onClick={() => goTo("dashboard")}>
        ← Voltar
      </button>

      <h2>Gráfico Financeiro</h2>

      {/* ✅ se não tiver dados */}
      {income === 0 && expense === 0 ? (
        <p>Sem dados ainda</p>
      ) : (
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      )}

      <div style={legend}>
        <p style={{ color: "#4CAF50" }}>
          Entradas: R$ {income.toFixed(2)}
        </p>
        <p style={{ color: "#F44336" }}>
          Gastos: R$ {expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

const container = {
  textAlign: "center",
  padding: 20
};

const back = {
  border: "none",
  background: "none",
  marginBottom: 10,
  cursor: "pointer"
};

const legend = {
  marginTop: 20
};