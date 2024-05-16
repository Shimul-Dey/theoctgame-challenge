import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import NewItemForm from './components/NewItemForm';
import BlockchainIntegration from './components/BlockchainIntegration';
import { fetchItems } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [items, setItems] = useState([]);

  const refreshItemList = async () => {
    const fetchedItems = await fetchItems();
    setItems(fetchedItems);
  };

  useEffect(() => {
    refreshItemList();
  }, []); // Fetch items on component mount

  return (
    <div className="container">
      <h1 className="container mt-4 mb-4 text-justify">Marketplace</h1>
      <NewItemForm onNewItemAdded={refreshItemList} />
      <ItemList items={items} />
      <BlockchainIntegration />
    </div>
  );
};

export default App;
