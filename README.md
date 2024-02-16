# Phase-4-Code-Challenge-Pizzas
## Setup
1. Clone the Repository
2. Setup Flask Server
   - cd server
   - python app.py
4. Setup React Client
   - cd client
   - npm install
   - npm start

## Project Structure
- server file
  - app.py: Main Flask application file with routes and server configuration.
  - models.py: File containing database models for SQLAlchemy.
- client file
  - components/: Folder for React components
    - App.js: Main React component for the application
  - styles/: Folder for CSS styles
    - App.css: Stylesheet for the App.js component

## API Endpoints
- GET /restaurants: Get a list of all restaurants.
- GET /restaurants/:id: Get details of a specific restaurant by ID.
- DELETE /restaurants/:id: Delete a restaurant and its associated pizzas.
- GET /pizzas: Get a list of all pizzas.
- POST /restaurant_pizzas: Create a new RestaurantPizza associated with an existing Pizza and Restaurant.
