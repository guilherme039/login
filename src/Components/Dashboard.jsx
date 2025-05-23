

import React from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';

function Dashboard({ onLogout }) {
  const stats = [
    {
      label: "Novas Vendas",
      value: "30 Vendas",
      description: "Aumento de 3.45% em comparação com a semana anterior",
      color: "orange",
      link: "Ver Relatório"
    },
    {
      label: "Faturamento Bruto Semanal",
      value: "R$ 1332,59",
      description: "Aumento de 1.19% em comparação com a semana anterior",
      color: "green",
      link: "Ver Relatório"
    },
    {
      label: "Faturamento Líq. Semanal",
      value: "R$ 668,85",
      description: "Aumento de 1.74% em comparação com a semana anterior",
      color: "purple",
      link: "Ver Relatório"
    },
    {
      label: "Contas a Pagar Mensal",
      value: "R$ 0,00",
      description: "Aumento de 100% em comparação com o mês anterior",
      color: "blue",
      link: "Ver Relatório"
    }
  ];

  const transactions = [
    { id: 1, name: "Cheese bacon", time: "0 minutos atrás", status: "Sucesso", amount: "R$ 20,00" },
    { id: 2, name: "Combo X-2", time: "0 minutos atrás", status: "Sucesso", amount: "R$ 179,97" },
    { id: 3, name: "Tubaina Funada 2 Litros", time: "0 minutos atrás", status: "Sucesso", amount: "R$ 9,00" },
    { id: 4, name: "Cheese bacon", time: "0 minutos atrás", status: "Sucesso", amount: "R$ 130,00" },
    { id: 5, name: "Tubaina Funada 2 Litros", time: "13 minutos atrás", status: "Sucesso", amount: "R$ 9,00" }
  ];

  const topSales = [
    { name: "Cheese bacon", price: "R$ 20,00", count: 34 },
    { name: "Duplo bacon cheddar", price: "R$ 28,00", count: 17 },
    { name: "Coca Cola 2 Litros", price: "R$ 8,50", count: 16.25 },
    { name: "Coca Cola Lata", price: "R$ 5,00", count: 12 },
    { name: "Combo X-2", price: "R$ 59,95", count: 12 }
  ];

  return (
    <div className="dashboard-container">
      <motion.div 
        className="dashboard-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="dashboard-header">
          <div>
            <h1>Home</h1>
            <div className="user-info">
              <p className="user-name">Izabela Monteiro da Silva</p>
              <p className="user-email">izabela.monteiro18@gmail.com</p>
            </div>
          </div>
          <button onClick={onLogout} className="logout-btn">
            Sair
          </button>
        </header>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`stat-card ${stat.color}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-description">{stat.description}</div>
              <button className="stat-link">{stat.link}</button>
            </motion.div>
          ))}
        </div>

        <div className="data-grid">
          <motion.div 
            className="transactions-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Transações</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Detalhes</th>
                    <th>Status</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id}>
                      <td>{tx.id}</td>
                      <td>
                        <div>{tx.name}</div>
                        <span className="time-info">{tx.time}</span>
                      </td>
                      <td><span className="status-badge">{tx.status}</span></td>
                      <td>{tx.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div 
            className="top-sales-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="section-header">
              <h2>Mais vendidos</h2>
              <button className="view-all-btn">Ver Tudo</button>
            </div>
            <p className="section-subtitle">5 Produtos Mais Vendidos Semana</p>
            <ul className="sales-list">
              {topSales.map((sale, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="sale-item"
                >
                  <div>
                    <p className="item-name">{sale.name}</p>
                    <p className="item-price">{sale.price}</p>
                  </div>
                  <span className="item-count">{sale.count} vendas</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
