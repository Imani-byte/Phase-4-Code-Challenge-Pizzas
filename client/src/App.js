import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurants data
    fetch('/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Pizza Restaurants</h1>
      </header>
      <main>
        <ul className="restaurant-list">
          {restaurants.map(restaurant => (
            <li key={restaurant.id} className="restaurant-item">
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <p className="restaurant-address">{restaurant.address}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p className="footer-text">© 2024 Pizza Restaurants App</p>
      </footer>
    </div>
  );
}

export default App;

