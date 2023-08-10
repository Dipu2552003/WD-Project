// File: mainRouter.js
// File: mainRouter.js
const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer"); // Verify the path to your question router

router.get("/", (req, res) => {
  res.send("This api is reserved for quora clone");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);

module.exports = router;



// const express = require("express");
// const mongoose = require("mongoose"); // Don't forget to import mongoose
// const router = express.Router();

// const articleSchema = {
//   title: String,
//   content: String,
// };

// const QuestionSchema = new mongoose.Schema({
//   questionName: String,
//   questionUrl: String,
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
//   answers: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Answer", // Corrected the reference name to singular "Answer"
//   }],
//   user: {
//     // Define a sub-document schema for the user information
//     name: String,
//     email: String,
//     // ... other relevant fields
//   },
// });

// // Create the Article model
// const Article = mongoose.model("Article", articleSchema);

// router
//   .route("/articles")
//   .get((req, res) => {
//     Article.find()
//       .then((foundArticles) => {
//         console.log(foundArticles);
//         res.send(foundArticles);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.send(err);
//       });
//   })
//   .post((req, res) => {
//     console.log(req.body.title);
//     console.log(req.body.content);

//     const newArticle = new Article({
//       title: req.body.title,
//       content: req.body.content,
//     });

//     newArticle
//       .save()
//       .then((savedArticle) => {
//         console.log(savedArticle);
//         res.send(savedArticle);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.send(err);
//       });
//   })
//   .delete((req, res) => {
//     Article.deleteMany()
//       .then(() => {
//         console.log("All articles deleted");
//         res.status(204).send(); // 204 No Content
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ error: "Internal server error" });
//       });
//   });

// module.exports = router;

