const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/quizDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define User Schema
const userSchema = new mongoose.Schema({
    name: String,
    score: Number
});
const User = mongoose.model("User", userSchema);

// Define Quiz Schema
const quizSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String
});
const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = { User, Quiz };
