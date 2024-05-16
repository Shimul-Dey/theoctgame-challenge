// api.js

const apiUrl = 'http://localhost:4000/items';

export const fetchItems = async () => {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Failed to fetch items');
      return [];
    }
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const addItem = async (name, price) => {
  const newItem = {
    name: name,
    price: parseFloat(price)
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    });

    if (response.ok) {
      console.log('Item added successfully!');
      return true;
    } else {
      console.error('Failed to add item');
      return false;
    }
  } catch (error) {
    console.error('Error adding item:', error);
    return false;
  }
};
