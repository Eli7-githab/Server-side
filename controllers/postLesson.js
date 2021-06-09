var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";


class PostLesson {
  postLesson = (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    const { numLesson, lessonName, file, date, notes, time } = req.body; //Adress, phone ....
    //Validations.
    //Check if user exists
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mySchoolDB");
      var myobj = { numLesson, lessonName, file, date, notes, time };
      dbo.collection("lessons").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
      // const token = generateAccessToken(user);
      // console.log("token", token);
      return res.send();
    });

  }
}

module.exports = new PostLesson();
