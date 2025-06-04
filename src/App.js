import React from 'react';
import { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 50 },
  { id: 3, name: "Orange", price: 80 },
];

function App() {
 const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ maxWidth: 400, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Product List</h2>
      <ul style={{ padding: 0 }}>
        {products.map(product => (
          <li 
            key={product.id} 
            onClick={() => setSelectedProduct(product)}
            style={{ 
              cursor: 'pointer', 
              padding: '8px', 
              borderBottom: '1px solid #ccc' 
            }}
          >
            {product.name}
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div style={{ marginTop: 20, padding: 16, border: '1px solid #ddd', borderRadius: 6 }}>
          <h3>Selected Product Details</h3>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
