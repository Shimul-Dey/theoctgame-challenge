import React, { useState } from 'react';
import { addItem } from '../api';

const NewItemForm = ({ onNewItemAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const added = await addItem(name, price);

        if (added) {
            console.log('Item added successfully!');
            setName('');
            setPrice('');
            onNewItemAdded(); // Refresh item list
        } else {
            console.error('Failed to add item');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="itemName" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="itemName"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="itemPrice" className="form-label">Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="itemPrice"
                        value={price}
                        onChange={handlePriceChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
        </div>
    );
};


export default NewItemForm;
