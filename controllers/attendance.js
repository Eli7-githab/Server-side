var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class Attendance {
  attendance = (req, res) => {
    try {
      const { d, userId, subject } = req.body; //Adress, phone ....
      //Validations.
      //Check if user exists
      MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db("mySchoolDB");
        var myobj = { d, userId };
       // let result =  await dbo.collection("teacher").findOne() //חיפוש לי תז מורה
        // dbo.collection("teacher").update({subject:subject}, {$set:{arrAttendance}}, {
         
        //   arrAttendance: [myobj, ... ]      
        // })
    
        // let result = await dbo.collection("teacher").findOne({"subject":subject});
        // result.findOneAndUpdate("attendance")
        // let result =  await dbo.collection("teacher").findOneAndUpdate({subject:subject},{arrAttendance: $push(myobj) }
        //   , function (err, res) {
        //     if (err) throw err;
        //     console.log("1 document inserted attendance");
        //     console.log(result);
        //     db.close();
        //   });
        // const token = generateAccessToken(user);
        // console.log("token", token);
        return res.send();
      });
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new Attendance();

