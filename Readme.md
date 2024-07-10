Product Creation Application
Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
Backend Setup
Frontend Setup
API Endpoints

Introduction
This is a full-stack application that allows users to create products through a form. The frontend is built with React, using Shopify Polaris for UI components and MobX for state management. The backend is built with AdonisJS and is used to persist product data in a SQLite database.

Features
Product creation form with fields for Title, Price, Stock Quantity, and Description.
Validation for form inputs.
State management with MobX.
API endpoint for product creation.
Success and error messages based on the API response.

Technologies Used
Frontend:

React
Shopify Polaris
MobX
Backend:

AdonisJS
SQLite

Installation
Prerequisites
Node.js and npm installed on your machine.
SQLite installed (if you want to inspect the database outside of AdonisJS).

Backend Setup
Clone the repository:

git clone https://github.com/yourusername/product-creation-app.git
cd product-creation-app/backend

Install backend dependencies:

npm install

Set up the environment variables:
Create a .env file in the backend directory and add the following:

Run migrations to set up the database:

adonis migration:run

Start the AdonisJS server:

adonis serve --dev

Frontend Setup

Navigate to the frontend directory:

cd ../frontend

Install frontend dependencies:

npm install

Start the React development server:

npm start

Usage
Open your browser and navigate to http://localhost:3000 to view the product creation form.
Fill out the form and submit to create a new product.
Check the backend logs to see the saved product or use a tool like DB Browser for SQLite to inspect the database.

API Endpoints
POST /products
Create a new product.

Request Body:

{
"title": "Product Title",
"price": 100,
"stockQuantity": 50,
"description": "Product Description"
}

Response:

Success: 201 Created

{
"id": 1,
"title": "Product Title",
"price": 100,
"stockQuantity": 50,
"description": "Product Description",
"created_at": "2024-07-09T00:00:00.000Z",
"updated_at": "2024-07-09T00:00:00.000Z"
}

Error: 400 Bad Request

{
"message": "Validation error"
}

product-creation-app/
├── backend/
│ ├── app/
│ │ ├── Controllers/
│ │ │ └── Http/
│ │ │ └── ProductController.js
│ │ ├── Models/
│ │ │ └── Product.js
│ │ └── ...
│ ├── config/
│ ├── database/
│ │ ├── migrations/
│ │ │ └── 2024_07_09_000000_create_products_table.js
│ │ └── adonis.sqlite
│ ├── .env
│ ├── package.json
│ └── server.js
└── frontend/
├── src/
│ ├── components/
│ │ └── ProductForm.js
│ ├── stores/
│ │ └── ProductStore.js
│ ├── App.js
│ └── index.js
├── public/
├── package.json
└── ...
