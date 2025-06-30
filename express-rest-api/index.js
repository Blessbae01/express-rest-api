const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

let items = [
  { id: 1, name: "Item One", description: "This is the first item" },
  { id: 2, name: "Item Two", description: "This is the second item" }
];


// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// GET /items - Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id - Get item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// POST /items - Create a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }
  const newItem = {
    id: items.length + 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update an item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: "Item not found" });

  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: "Name and description are required" });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id - Delete an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});


// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
