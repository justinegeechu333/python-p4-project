from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    serialize_rules=('-purchases.customer',)
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    phonenumber = db.Column(db.String)

    purchases = db.relationship('Purchase', back_populates = 'customer', cascade = 'all, delete-orphan')
    movies = association_proxy('Purchase', 'movie')



class Movie(db.Model, SerializerMixin):
    __tablename__ = 'movies'
    serialize_rules=('-purchases.movie',)
    id = db.Column (db.Integer, primary_key = True)
    title = db.Column(db.String)
    time = db.Column(db.String)
    details = db.Column(db.String)
    ticket_price = db.Column(db.Integer)
    image = db.Column(db.String)

    purchases = db.relationship('Purchase', back_populates = 'movie', cascade = 'all, delete-orphan')
    customers = association_proxy('Purchase', 'customer')



class Purchase(db.Model, SerializerMixin):
    __tablename__ = 'purchases'
    serialize_rules=('-movie.purchases', '-customer.purchases')
    id = db.Column(db.Integer, primary_key = True)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))

    movie = db.relationship('Movie', back_populates = 'purchases')
    customer = db.relationship('Customer', back_populates = 'purchases')
