# Car Inventory App

A simple Car Inventory Manager built with MongoDB, Express, and Node.js (MEN stack). This app allows you to manage car inventory by adding, retrieving, updating, and deleting car records.

## Features

- **Create**: Add a new car to the inventory.
- **Read**: Get the list of all cars in the inventory.
- **Update**: Update the details of an existing car.
- **Delete**: Remove a car from the inventory.

## Technologies Used

- **MongoDB**: For storing car data.
- **Express**: For handling HTTP requests.
- **Node.js**: For running the server-side logic.
- **Mongoose**: For interacting with MongoDB.
- **dotenv**: For managing environment variables.
- **Nodemon**: For auto-reloading during development.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/car-inventory-app.git
Navigate into the project directory:

bash
Copy
Edit
cd car-inventory-app
Install dependencies:

bash
Copy
Edit
npm install
Set up your MongoDB Atlas cluster and add your connection string to a .env file:

bash
Copy
Edit
MONGO_URI=your_mongodb_connection_string
Start the server using Nodemon:

bash
Copy
Edit
npm start
Your app will now be running on http://localhost:3000.

API Endpoints
GET /api/cars: Retrieve a list of all cars.

POST /api/cars: Add a new car to the inventory.

PUT /api/cars/:id: Update an existing car by its ID.

DELETE /api/cars/:id: Delete a car by its ID.