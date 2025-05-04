const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    name: String,
    email: String,
    favoritePet: String,
    petOwnership: String,
    petSpending: Number
});

module.exports = mongoose.model('Survey', SurveySchema);
