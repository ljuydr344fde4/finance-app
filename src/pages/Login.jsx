import React from "react";
import { useState } from "react";

export default function Login({ goTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 FUNÇÃO DE LOGIN
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const result = await response.text();

      if (result === "OK") {
        alert("Login realizado ✅");
        goTo("dashboard");
      } else {
        alert("Email ou senha inválidos ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o backend");
    }
  };

  // 🔥 FUNÇÃO DE CADASTRO
  const handleRegister = async () => {
    try {
      await fetch("http://localhost:8081/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      alert("Conta criada ✅");

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar");
    }
  };

  return (
    <div style={{ padding: 30, textAlign: "center" }}>
      <h1>FinanceApp</h1>
      <p>Controle suas finanças</p>

      <input
        placeholder="Email"
        style={input}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Senha"
        type="password"
        style={input}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={primary} onClick={handleLogin}>
        Entrar
      </button>

      <button style={secondary} onClick={handleRegister}>
        Criar conta
      </button>
    </div>
  );
}

const input = {
  width: "100%",
  padding: 15,
  margin: "10px 0",
  borderRadius: 10
};

const primary = {
  width: "100%",
  padding: 15,
  background: "#000",
  color: "#fff",
  marginTop: 10,
  borderRadius: 10
};

const secondary = {
  width: "100%",
  padding: 15,
  marginTop: 10,
  borderRadius: 10
};
