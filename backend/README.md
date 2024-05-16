# Backend
In the backend directory, you can run:
### `npm install`
### `node index.js`
It will run on this endpoint : [http://localhost:4000]

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
