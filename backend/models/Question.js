const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer", // Corrected the reference name to singular "Answer"
  }],
  user: {
    // Define a sub-document schema for the user information
    name: String,
    email: String,
    // ... other relevant fields
  },
});

module.exports = mongoose.model("Question", QuestionSchema); // Changed the model name to singular "Question"
