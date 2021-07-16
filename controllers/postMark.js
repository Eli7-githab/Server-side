var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class PostMark {
  postMark = (req, res) => {
    try {
      const { teacherId, marks, title } = req.body; 
      //Validations.
      //Check if user exists
      MongoClient.connect(url,async function (err, db) {
        if (err) throw err;
        var dbo = db.db("mySchoolDB");
        var myobj = { title, marks };

        // postMark(teacherId, marks:{ "test": [aredf: 90, 35fgd: 100] })
        // find by id teacher
        // Marks -> find by title
        // Teacher.marks).find(markTitle=> markTitle === title))object.keys
        // Found: push
        // Not found: new key

        // var teacher= dbo.collection("teacher").findById(teacherId,{arrMarks[title]:{ $push(myobj)}})

        var query = { _id: teacherId };
        console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqq",query)
       var teacher = await dbo.collection("teacher").findOne(query);
        // var teacher = await dbo.collection("teacher").findById(teacherId);
        var teacher = await dbo.collection("teacher");
        console.log("teacher1----------",teacher[0]);
        console.log("teacher3----------"+teacher);
        let foundTitle = Object.keys((teacher.arrMarks).find(markTitle => markTitle === title))
        console.log(foundTitle);
        if (foundTitle) {
          teacher.arrMarks[title].push({marks});
        }
        else{
          teacher.arrMarks.push({myobj});
        }
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