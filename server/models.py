# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# class Restaurant(db.Model):
#     __tablename__ = 'restaurants'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String)
#     address = db.Column(db.String)

#     pizzas = db.relationship('Pizza', secondary='restaurant_pizzas', back_populates='restaurants')

#     def __repr__(self) -> str:
#         return f"{self.id}, {self.name}, {self.address}"


# class Pizza(db.Model):
#     __tablename__ = 'pizzas'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String)
#     ingredients = db.Column(db.String)

#     restaurants = db.relationship('Restaurant', secondary='restaurant_pizzas', back_populates='pizzas')

#     def __repr__(self) -> str:
#         return f"{self.id}, {self.name}, {self.ingredients}"


# class RestaurantPizza(db.Model):
#     __tablename__ = 'restaurant_pizzas'
 
#     id = db.Column(db.Integer, primary_key=True)
#     price = db.Column(db.Float)
#     pizza_id = db.Column(db.Integer, db.ForeignKey('pizza.id'))
#     restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))

#     restaurant = db.relationship('Restaurant', back_populates='pizzas')
#     pizza = db.relationship('Pizza', back_populates='restaurants')

#     def __repr__(self) -> str:
#         return f"{self.id}, {self.price}, {self.pizza_id}, {self.restaurant_id}"

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    pizzas = db.relationship('Pizza', secondary='restaurant_pizza')

class Pizza(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    ingredients = db.Column(db.String(255), nullable=False)
    restaurants = db.relationship('Restaurant', secondary='restaurant_pizza')

class RestaurantPizza(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float, nullable=False)
    pizza_id = db.Column(db.Integer, db.ForeignKey('pizza.id'), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.id'), nullable=False)
    pizza = db.relationship('Pizza')
    restaurant = db.relationship('Restaurant')

# Add validation to RestaurantPizza model
@db.validates('price')
def validate_price(self, key, value):
    if not (1 <= value <= 30):
        raise ValueError('Price must be between 1 and 30.')
    return value
