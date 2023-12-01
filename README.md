 # Flatiron School Phase 4 Project: Meowtown Cinema!

 ...
 ## Meowtown Cinema: A Functional Pseudo Movvie Fullstack Application utilizing React & Flask

 This project created by Justine Chu, Andre Marrero, and Alex Ennis is a fullstack application created to demonstrate our skills acquired over the course of the program so far. Meowtown Cinema utilizes several features from **React**, **Flask** and their libraries. The frontend and backend are seperated by the directory client and server.
 
 ## Installation

  ### `server/`

  The server directory hosts all the backend code.
  
  To download the dependencies and seed the database for the backend server, run:

  ```console
  pipenv install
  pipenv shell
  cd server
  python seed.py
  ```
  
  To deploy the the Flask API for the backend you can run:

  ```console
  python server/app.py
  ```

  ### `client/`

  The `client/` directory contains all of our frontend code. The file
  `package.json` sets the `proxy` field to forward
  requests to `"http://localhost:5555". Meaning that as soon you start the React app it will connect it's requests to our backend server and you will be able to see the database's data as well as the frontend's functionality on "https://localhost:3000".

  To download the dependencies for the frontend client, run:

  ```console
  npm install --prefix client
  ```

  You can run your React app on [`localhost:3000`](http://localhost:3000) by
  running:

  ```sh
  npm start --prefix client
  ```
  now lets get into how our code works and what it does...

 # Meowtown Cinema: Backend

 ## Movie Ticket Purchases Management with SQLAlchemy

This code defines SQLAlchemy models for managing our movie-related data, including customers, movies, and purchases. The code leverages the `sqlalchemy_serializer` library for easy serialization and includes an association proxy for simplifying access to associated data.

 ### Models:

 ### `models.py/`

 ### 1. Customer:
 - Represents a customer who can make movie purchases.
 - Fields: `id`, `name`, `phonenumber`.
 - Has a one-to-many relationship with purchases and an association proxy for movies.

 ### 2. Movie:
 - Represents a movie available for purchase.
 - Fields: `id`, `title`, `time`, `details`, `ticket_price`, `image`.
 - Has a one-to-many relationship with purchases and an association proxy for customers.

 ### 3. Purchase:
 - Represents a purchase made by a customer for a specific movie.
 - Fields: `id`, `movie_id`, `customer_id`.
 - Includes relationships with both movies and customers.
 - Illustrates a many-to-relationship through purchases made by customers.

### Serialization:

- All models implement the `SerializerMixin` for easy serialization, allowing straightforward conversion to JSON.

### Relationships:

- Customers and movies are connected through a many-to-many relationship facilitated by the `Purchase` model.

### Serialization Rules:

- Custom serialization rules are defined for each model to control the depth and content of serialized data, preventing circular references.

### Usage:

1. Import the necessary classes and modules.
2. Utilize the `Customer`, `Movie`, and `Purchase` classes to interact with the database.