const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let customers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

app.get("/customers", (req, res) => {
  res.json(customers);
});

app.get("/customers/:id", (req, res) => {
  const customer = customers.find(c => c.id == req.params.id);
  res.json(customer || {});
});

app.post("/customers", (req, res) => {
  const newCustomer = { ...req.body, id: Date.now() };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.put("/customers", (req, res) => {
  const index = customers.findIndex(c => c.id == req.body.id);
  if (index !== -1) customers[index] = req.body;
  res.json(req.body);
});

app.delete("/customers/:id", (req, res) => {
  customers = customers.filter(c => c.id != req.params.id);
  res.sendStatus(204);
});

app.listen(4000, () => console.log("Mock API running on http://localhost:4000"));
