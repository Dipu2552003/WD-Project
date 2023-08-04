const express=require("express");
const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 80;

// const path = require("path");
const db = require("./db");
const router = require("./routes");

//middle ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

//routes

app.use("/api", router);

// app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
 //app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../../frontend/build`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

// app.get("*",(req,res)=>{
//   try {
//        res.send("Hello working");
//       } catch (e) {
//         res.send("Oops! unexpected error");
//       }
// })


app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});
