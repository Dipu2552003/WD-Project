const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 80;
const app = express();
const db = require("./db");
const router = require("./routes");


//databse Connections
db.connect();


//middle-ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });


  app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(`F:/DIPU/cllg_stuff/3rd Year/Project/WD/WD/my-app/public/index.html`));
    } catch (e) {
      res.send("Oops! unexpected error");
    }
  });


  app.listen(process.env.PORT || PORT,()=>{
    console.log("working"); 
  })


  //routes
  app.use("/api",router)