import React from 'react';

const Dropdown = () => {
  return (
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title">Sortuj</div>
      </div>
      <div className="dd-list">
        <button className="dd-list-item" type="button">najniższa cena</button>
        <button className="dd-list-item" type="button">najwyższa cena</button>
      </div>
    </div>
  )
};

export default Dropdown;