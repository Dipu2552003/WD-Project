const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // Don't forget to import mongoose

// Define the Answer model and schema
const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

const Answer = mongoose.model("Answer", AnswerSchema);

// Define a POST route to add new answers

router.get("/",(req,res)=>{
  res.send("hello");
})

router.post("/", (req, res) => {
  const newAnswer = new Answer({
    answer: req.body.answer,
    questionId: req.body.questionId,
  });

  newAnswer
    .save()
    .then((savedAnswer) => {
      console.log(savedAnswer);
      res.send(savedAnswer);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
