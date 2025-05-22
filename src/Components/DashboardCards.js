import React, { useState } from 'react';
import './DashboardCards.css';

const DashboardCards = () => {
  const [salesItems, setSalesItems] = useState([
    { id: 1, name: 'Combo X-2', quantity: 5, approved: false },
    { id: 2, name: 'Cheese Bacon', quantity: 10, approved: false },
    { id: 3, name: 'Tubaina Funda 2 Litros', quantity: 3, approved: false },
  ]);
  const [showReport, setShowReport] = useState(false);

  const handleApprove = (id) => {
    setSalesItems(salesItems.map(item =>
      item.id === id ? { ...item, approved: true } : item
    ));
  };

  const handleReportClick = () => {
    setShowReport(true);
  };

  const closeReport = () => {
    setShowReport(false);
  };

  return (
    <div className="dashboard-container">
      <div className="card">
        <h3>Novas Vendas</h3>
        <p>30 Vendas</p>
        <p>Aumento de 3.45% em comparação com a semana anterior</p>
        <button onClick={handleReportClick}>Ver Relatório</button>
        <div className="sales-items">
          <h4>Itens para Aprovação</h4>
          {salesItems.map(item => (
            <div key={item.id} className="sales-item">
              <span>{item.name} - Quantidade: {item.quantity}</span>
              {!item.approved ? (
                <button onClick={() => handleApprove(item.id)}>OK</button>
              ) : (
                <span>Aprovado</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal para o Relatório */}
      {showReport && (
        <div className="modal">
          <div className="modal-content">
            <h3>Relatório de Novas Vendas</h3>
            <p>Data: {new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
            <p>Total de Vendas: 30</p>
            <p>Aumento: 3.45% (semana anterior)</p>
            <button onClick={closeReport}>Fechar</button>
          </div>
        </div>
      )}

      <div className="card">
        <h3>Faturamento Bruto Semanal</h3>
        <p>R$ 1332,59</p>
        <p>Aumento de 1.19% em comparação com a semana anterior</p>
        <button>Ver Relatório</button>
      </div>

      <div className="card">
        <h3>Faturamento Líq. Semanal</h3>
        <p>R$ 668,85</p>
        <p>Aumento de 1.74% em comparação com a semana anterior</p>
        <button>Ver Relatório</button>
      </div>

      <div className="card">
        <h3>Contas a Pagar Mensal</h3>
        <p>R$ 0,00</p>
        <p>Aumento de 100% em comparação com o mês anterior</p>
        <button>Ver Relatório</button>
      </div>
    </div>
  );
};

export default DashboardCards;
