import React from "react";
import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewTransaction from "./pages/NewTransaction";
import Summary from "./pages/Summary";
import Budget from "./pages/Budget";

export default function App() {
  const [screen, setScreen] = useState("login");

  if (screen === "dashboard") return <Dashboard goTo={setScreen} />;
  if (screen === "new") return <NewTransaction goTo={setScreen} />;
  if (screen === "summary") return <Summary goTo={setScreen} />;
  if (screen === "budget") return <Budget goTo={setScreen} />;

  return <Login goTo={setScreen} />;
}
