const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Survey = require('./models/Survey');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/pet_survey', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Survey Form Route
app.get('/', (req, res) => {
    res.render('survey');
});

// Handle Form Submission
app.post('/submit', async (req, res) => {
    const { name, email, favoritePet, petOwnership, petSpending } = req.body;
    await Survey.create({ name, email, favoritePet, petOwnership, petSpending });
    res.redirect('/results');
});

// Display Survey Results
app.get('/results', async (req, res) => {
    const results = await Survey.find();
    res.render('results', { results });
});

app.listen(3000, () => console.log("Server running on port 3000"));
