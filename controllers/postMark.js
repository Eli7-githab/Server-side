var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class PostMark {
    postMark = (req, res) => {
    try {

        
      const {teacherId, marks,title} = req.body; //Adress, phone ....
      //Validations.
      //Check if user exists
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mySchoolDB");
        var myobj = { marks,title };
        // dbo.collection("teacher").findByIdAndUpdate(teacherId,{arrMarks[title]:{ $push(myobj)}})
        insertOne(myobj, function (err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
        // const token = generateAccessToken(user);
        // console.log("token", token);
        return res.send();
      });
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new PostMark();