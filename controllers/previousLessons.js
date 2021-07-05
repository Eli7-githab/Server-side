
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
        const { id } = req.query;
        MongoClient.connect(url, async function (err, db) {
            if (err)
                return res.status(500).send(err);
            var dbo = db.db("mySchoolDB");
            try{
<<<<<<< HEAD
     debugger
     var query = { id};
     let resultStudent
     resultStudent = await dbo.collection("student").findOne(query)

            // let resultStudent =await  dbo.collection("student").find({student:req.params.id});
            console.log(resultStudent);
            // let resultTeacher =await  dbo.collection("teacher").findone({subject:resultStudent.subject});
            let result =await  dbo.collection("lessons").find({subject:resultStudent.subject}).toArray();
            console.log(result);
=======
            // let resultStudent =await  dbo.collection("student").findone({student:req.params.student});
            // console.log(resultStudent);
            // let resultTeacher =await  dbo.collection("teacher").findone({subject:resultStudent.subject});
            // let result =await  dbo.collection("lessons").find({teacher:resultTeacher.email}).toArray();


            let result =await  dbo.collection("lessons").findOne({teacher:resultTeacher.email}).toArray();
>>>>>>> 3e183e4b5fae872c714863dcca615c4b48f1b593
            db.close();
            return res.status(200).json(result);
            }catch(error){a
          return  res.status(500).json({error:error})
        }
        });
        

        }
        }
    
    
module.exports = new PreviousLessons();

