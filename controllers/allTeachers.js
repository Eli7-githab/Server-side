
var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class AllTeachers {
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    allTeachers = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        MongoClient.connect(url, async function (err, db) {
            if (err)
                return res.status(500).send(err);
            var dbo = db.db("mySchoolDB");
            try{
        

         //   let resultTeacher =await  dbo.collection("teacher").find({teacher:resultTeacher.subject}).toArray();
          let resultTeacher =await  dbo.collection("teacher").find();
            db.close();
            return res.status(200).json(resultTeacher);
            }catch(error){a
          return  res.status(500).json({error:error})
        }
        });
        

        }
        }
    
    
module.exports = new AllTeachers();

