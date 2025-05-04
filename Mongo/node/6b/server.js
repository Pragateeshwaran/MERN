const express = require("express");
const bodyParser = require("body-parser");
const { User, Quiz } = require("./model"); // Import models (already connected in model.js)

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home Page - Enter user details
app.get("/", (req, res) => {
    res.render("index"); // Ensure 'views/index.ejs' exists
});

app.get("/quiz", async (req, res) => {
    try {
        const questions = await Quiz.find();
        res.render("quiz", { questions, name: "Guest" }); // Default name if accessed directly
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading quiz.");
    }
});

// Load Quiz Page
app.post("/quiz", async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).send("Name is required!");

        const questions = await Quiz.find(); // Fetch quiz questions
        res.render("quiz", { questions, name }); // Ensure 'views/quiz.ejs' exists
    } catch (error) {
        console.error(error);
        res.status(500).send("Error loading quiz.");
    }
});

// Submit Quiz
app.post("/submit", async (req, res) => {
    try {
        let score = 0;
        const userName = req.body.name;
        const answers = req.body.answers;
        const questions = await Quiz.find();

        questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score++;
            }
        });

        // Save user result
        const user = new User({ name: userName, score });
        await user.save();

        res.render("result", { name: userName, score, total: questions.length }); // Ensure 'views/result.ejs' exists
    } catch (error) {
        console.error(error);
        res.status(500).send("Error submitting quiz.");
    }
});

app.listen(port, () => {
    console.log(`Quiz app running at http://localhost:${port}`);
});
