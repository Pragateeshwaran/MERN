const  {MongoClient} = require('mongodb')
const  cors = require('cors')
const  bodyParser = require('body-parser')
const path = require('path')
const express = require('express') 
const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
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


let client, db, questionsCollection;
const createConnection =  async () =>{
    client = new MongoClient('mongodb://localhost:27017')
    await client.connect()
    db = await client.db('quest')
    questionsCollection = await db.collection('myQuest')
    console.log('🟢 Connected to Mongo')
    questionsCollection.deleteMany({})
    questionsCollection.insertMany(sampleQuestions)
    console.log("question uploaded successfully")
}

createConnection()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client.html'));
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
    const Ques = await questionsCollection.find({}).toArray()
    const userAnswers = req.body;
    let score = 0
    Ques.forEach((element, i) => {
        if(element.correctAnswer == userAnswers[`q${i}`]){
            score += 1
        }            
    });

    res.send(`<>
        <p>score is ${score} <\p>
    </>`)
})
app.listen(3000)