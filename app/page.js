"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://SEU-ENDPOINT/webhook/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Carregando...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 Dashboard de Trades</h1>

      <p>Trades: {data.total_trades}</p>
      <p>Wins: {data.wins}</p>
      <p>Losses: {data.losses}</p>

      <p>Win Rate: {(data.win_rate * 100).toFixed(2)}%</p>

      <p style={{ color: data.total_profit > 0 ? "green" : "red" }}>
        Lucro: {Number(data.total_profit).toFixed(6)}
      </p>

      <p>Média: {Number(data.avg_trade).toFixed(6)}</p>

      <p>Melhor: {Number(data.best_trade).toFixed(6)}</p>
      <p>Pior: {Number(data.worst_trade).toFixed(6)}</p>

      <p>
        ⏱️ {data.first_trade_time} → {data.last_trade_time}
      </p>
    </div>
  );
}
