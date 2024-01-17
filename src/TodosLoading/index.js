import './TodosLoading.css';
import React from 'react';

function TodosLoading() {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
}

export { TodosLoading };
