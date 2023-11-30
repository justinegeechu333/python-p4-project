#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import make_response, request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Customer, Purchase, Movie
from flask import jsonify

class Movies(Resource):
    def get(self):
        movies = [movie.to_dict() for movie in Movie.query.all()]
        return make_response(movies, 200)

    def post(self):
        params = request.json
        new_movie = Movie(title=params['title'], time= params['time'], details= params['details'], ticket_price= params['ticket_price'], image= params['image'])
        db.session.add(new_movie)
        db.session.commit()
        return make_response(new_movie.to_dict(), 201)
    
api.add_resource(Movies, '/movies')

# Views go here!
class MoviesById(Resource):
    def get(self, id):
        movie = Movie.query.get(id)
        if not movie:
            return make_response({'error': 'Movie not found'}, 404)
        return make_response(movie.to_dict(), 200)
    
    def delete(self, id):
        movie = Movie.query.get(id)
        if not movie:
            return make_response({'error': 'Movie not found'}, 404)
        db.session.delete(movie)
        db.session.commit()
        return make_response('', 204)
    
    def patch(self, id):
        movie = Movie.query.get(id)
        if not movie:
            return make_response({'error': 'Movie not found'}, 404)
        params = request.json
        for attr in params:
            setattr(movie, attr, params[attr])
        db.session.commit()
        return make_response(movie.to_dict(), 200)
    
    def post(self, id): 
        params = request.json
        new_customer = Customer(name=params['name'], phonenumber=params['phonenumber'])
        db.session.add(new_customer)
        db.session.commit()
        
        new_purchase = Purchase(customer_id=new_customer.id, movie_id=id)
        db.session.add(new_purchase)
        db.session.commit()
        return make_response(new_purchase.to_dict(), 201)

api.add_resource(MoviesById, '/movies/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

