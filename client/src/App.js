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
      <h1>Pizza Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// // App.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [restaurants, setRestaurants] = useState([]);
//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     // Fetch restaurants and pizzas on component mount
//     fetchRestaurants();
//     fetchPizzas();
//   }, []);

//   const fetchRestaurants = () => {
//     axios.get('http://localhost:5000/restaurants')
//       .then(response => setRestaurants(response.data))
//       .catch(error => console.error('Error fetching restaurants:', error));
//   };

//   const fetchPizzas = () => {
//     axios.get('http://localhost:5000/pizzas')
//       .then(response => setPizzas(response.data))
//       .catch(error => console.error('Error fetching pizzas:', error));
//   };

//   return (
//     <div>
//       <h1>Restaurant and Pizza App</h1>

//       <h2>Restaurants</h2>
//       <ul>
//         {restaurants.map(restaurant => (
//           <li key={restaurant.id}>
//             <strong>{restaurant.name}</strong> - {restaurant.address}
//           </li>
//         ))}
//       </ul>

//       <h2>Pizzas</h2>
//       <ul>
//         {pizzas.map(pizza => (
//           <li key={pizza.id}>
//             <strong>{pizza.name}</strong> - {pizza.ingredients}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
