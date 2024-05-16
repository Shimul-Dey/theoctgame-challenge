// require dependencies so they can be used throughout this code
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')




// initialize Express.js server and save as a variable
// so it can be referred to as `app`
const app = express();
app.use(cors())
app.use(bodyParser.json());
let items = []; // In-memory storage for items

// GET endpoint to fetch all todo items
app.get("/items", (req, res) => {
  res.json(items);
});

// POST endpoint to create a new todo item
// provide `title` and optionally `completed` in the request body as JSON
app.post("/items", (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  items.push(item);
  res.status(201).json(item);
});


// run the server on port 4000
// for example the app can run locally at this URL: http://localhost:4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});