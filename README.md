# Getting Started with docker

In the project directory, you can run:

### `docker-compose up --build`

Open [http://localhost:3000] to view the app in your browser.

# Getting Started without docker

# Backend
In the backend directory, you can run:
### `npm install`
### `node index.js`
It will run on this endpoint : [http://localhost:4000]

# Frontend
In the frontend directory, you can run:
### `npm install`
### `npm start`
It will run on this endpoint : [http://localhost:3000]

# Project functionality documentation

# Backend | API ENDPOINTS

There are two endpoints 

# GET http://localhost:4000/items
Response:

Status Code: 200 OK
Content Type: application/json
Example Response Body:
[
  {
    "name": "Item 1",
    "price": 20.99
  },
  {
    "name": "Item 2",
    "price": 15.49
  },
  {
    "name": "Item 3",
    "price": 10.0
  }
]

# POST http://localhost:4000/items
Request Body:

Content Type: application/json

Request Body Example:
{
  "name": "New Item",
  "price": 25.0
}

# Frontend

There are three main components: 

ItemList - It is responsible for showing items list from the above GET endpoint

NewItemForm - It is responsible for adding new item in the above POST endpoint

BlockchainIntegration - It is responsible for connecting to Ethereum network and showing latest block number