const mongoose = require("mongoose");
const { Quiz } = require("./model");

mongoose.connect("mongodb://localhost:27017/quizDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const sampleQuestions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "Capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
    { question: "Largest planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Jupiter" }
];

Quiz.insertMany(sampleQuestions)
    .then(() => {
        console.log("Sample questions inserted.");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));
