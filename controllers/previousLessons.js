
var MongoClient = require('mongodb').MongoClient;
const jwt = require("jsonwebtoken");
var url = "mongodb://localhost:27017/mySchoolDB";

class PreviousLessons {
    TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

    generateAccessToken = (username) => {
        return jwt.sign({ username }, TOKEN_SECRET);
    };

    previousLessons = (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        MongoClient.connect(url, async function (err, db) {
            if (err)
                return res.status(500).send(err);
            var dbo = db.db("mySchoolDB");
            let result = await dbo.collection("lessons").find();
            console.log("res_lessons", result )
            return res.json({ result: result[0] });
        });
             db.close();
           
        }
        }
    
    
module.exports = new PreviousLessons();

