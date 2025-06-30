# Simple Express REST API

## Description
This is a basic REST API built with Express.js for managing items.

## Setup Instructions

1. Clone or download this repo
2. Run `npm install`
3. Run `node index.js`
4. Access via `http://localhost:3000`

## API Routes

### Root
- `GET /` → Hello World message

### Items
- `GET /items` → Get all items
- `GET /items/:id` → Get item by ID
- `POST /items` → Create item (send JSON `{ name, description }`)
- `PUT /items/:id` → Update item (send JSON `{ name, description }`)
- `DELETE /items/:id` → Delete item
