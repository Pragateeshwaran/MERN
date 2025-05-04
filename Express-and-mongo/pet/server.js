// server.js
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
app.use(express.json());

// MongoDB setup
const uri = 'mongodb://127.0.0.1:27017'; // Use 127.0.0.1 to avoid potential DNS issues
const client = new MongoClient(uri);

let petCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db('petdb');
    petCollection = db.collection('pets');
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}
connectDB();

// ➕ Add a new pet
app.post('/pets', async (req, res) => {
  const { name, type, age } = req.body;
  if (!name || !type || !age) {
    return res.status(400).json({ message: '❌ All fields are required' });
  }
  await petCollection.insertOne({ name, type, age });
  res.json({ message: '✅ Pet added successfully' });
});

// 📋 Get all pets
app.get('/pets', async (req, res) => {
  const pets = await petCollection.find().toArray();
  res.json(pets);
});

// 📊 Get average age per pet type
app.get('/pets/average', async (req, res) => {
  const result = await petCollection.aggregate([
    { $group: { _id: '$type', avgAge: { $avg: '$age' } } }
  ]).toArray();
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
