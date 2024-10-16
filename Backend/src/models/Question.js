const mongoose = require('mongoose');

// Define the schema for your quiz questions
const questionSchema = new mongoose.Schema({
  id: Number,
  type: String,
  difficulty: String,
  category: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String]
});

// Create a model
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
