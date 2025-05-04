const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'quizDB';
const COLLECTION_NAME = 'questions';

let db, questionsCollection;

const sampleQuestions = [
  { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
  { question: "What color is the sky?", options: ["Red", "Blue", "Green", "Yellow"], correctAnswer: "Blue" },
  { question: "How many days in a week?", options: ["5", "6", "7", "8"], correctAnswer: "7" },
  { question: "What is Earth's largest continent?", options: ["Africa", "Asia", "Europe", "America"], correctAnswer: "Asia" },
  { question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Carbon"], correctAnswer: "Water" },
  { question: "How many months in a year?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
  { question: "What planet do we live on?", options: ["Mars", "Venus", "Earth", "Jupiter"], correctAnswer: "Earth" },
  { question: "What is 10 × 5?", options: ["40", "50", "60", "70"], correctAnswer: "50" },
  { question: "Which is a fruit?", options: ["Carrot", "Potato", "Apple", "Onion"], correctAnswer: "Apple" },
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], correctAnswer: "Paris" }
];


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/questions', async (req, res) => {
  try {
    const questions = await questionsCollection.find({}).toArray();
    res.json(questions);
  } catch (error) {
    res.status(500).send('Error fetching questions');
  }
});

app.post('/submit', async (req, res) => {
  try {
    const userAnswers = req.body;
    const questions = await questionsCollection.find({}).toArray();
    let score = 0;

    questions.forEach((question, index) => {
      if (userAnswers[`q${index}`] === question.correctAnswer) {
        score++;
      }
    });

    res.send(`
      <h1>Quiz Results</h1>
      <p>Your score: ${score}/${questions.length}</p>
      <p>${score >= 7 ? 'Great job!' : 'Keep practicing!'}</p>
      <a href="/">Take quiz again</a>
    `);
  } catch (error) {
    res.status(500).send('Error processing quiz');
  }
});

MongoClient.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async (client) => {
    db = client.db(DB_NAME);
    questionsCollection = db.collection(COLLECTION_NAME);

    // Insert sample questions
    await questionsCollection.deleteMany({});
    await questionsCollection.insertMany(sampleQuestions);
    console.log('Sample questions inserted');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
