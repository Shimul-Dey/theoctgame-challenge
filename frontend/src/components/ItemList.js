import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="container mt-4">
      <h2>Item List</h2>
      <ul className="list-group">
        {items.map(item => (
          <li key={item.id} className="list-group-item">
            <strong>{item.name}</strong> - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
