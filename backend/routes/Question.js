
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define the Question schema


const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer", // Corrected the reference name to singular "Answer"
  }],

  tags: [String],
});




// Create the Question model
const Question = mongoose.model("Question", QuestionSchema);

// Define routes
router.route("/").get(async (req, res) => {
  try {
    const aggregatedQuestions = await Question.aggregate([
      {
        $lookup: {
          from: "answers", // Assuming "answers" is the name of your answers collection
          localField: "_id",
          foreignField: "questionId",
          as: "allAnswers",
        },
      },
    ]);

    res.status(200).send(aggregatedQuestions);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "An error occurred",
    });
  }
})
  .post((req, res) => {
    console.log(req.body.title);
    console.log(req.body.content);

    const newQuestion = new Question({
      questionName: req.body.questionName,
      questionUrl: req.body.questionUrl,
      tags: req.body.selectedTags,
      
    });

    newQuestion
      .save()
      .then((savedQuestion) => {
        console.log(savedQuestion);
        res.send(savedQuestion);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  })
  .delete((req, res) => {
    Question.deleteMany()
      .then(() => {
        console.log("All Questions deleted");
        res.status(204).send(); // 204 No Content
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  });

module.exports = router;
















// const questionDB = require("../models/Question");

// router.post("/", async (req, res) => {
//   console.log(req.body);

//   try {
//     await questionDB.create({
//       questionName: req.body.questionName,
//       questionUrl: req.body.questionUrl,
//     });

//     res.status(201).send({
//       status: true,
//       message: "Question added successfully",
//     });
//   } catch (err) {
//     res.status(400).send({
//       status: false,
//       message: "Bad format",
//     });
//   }
// });

// router.get("/", async (req, res) => {
//   questionDB
//     .aggregate([
//       {
//         $lookup: {
//           from: "answers",
//           localField: "_id",
//           foreignField: "questionId",
//           as: "allAnswers",
//         },
//       },
//     ])
//     .exec()
//     .then((doc) => {
//       res.status(200).send(doc);
//     })
//     .catch((error) => {
//       res.status(500).send({
//         status: false,
//         message: "Unable to get the question details",
//       });
//     });
// });



// module.exports = router;
