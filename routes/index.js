const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LoginController = require("../controllers/login")
const SignupController = require("../controllers/signup")
const PostLessonController = require("../controllers/postLesson")


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mySchoolDB";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({username}, TOKEN_SECRET);
};

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mySchoolDB";


router.get('/mySchoolDB',(req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) {
  console.err(err)
  }
  else{
    console.log("Database created!");
    db.close();
    
  }
  res.send();
});
})


router.get("/login", LoginController.login);

router.post("/signup", SignupController.signup);

router.post("/postLesson", PostLessonController) 

router.get("/")

module.exports = router;
