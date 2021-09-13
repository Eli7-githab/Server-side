const jwt = require("jsonwebtoken");
const Student = require('../models/student');
const Teacher = require('../models/teacher');

class Login {
  TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

  generateAccessToken = (username) => {
    console.log('generateAccessToken ',username);
    return jwt.sign({ username:username }, this.TOKEN_SECRET);
  };

  login = async (req, res) => {
    try {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
      const { user, password } = req.query;
      if (user == '1' && password == '1')
        return res.json({ kind: 'admin' });
      var query = { email: user, password };
      let result
      result = await Student.findOne(query)
      if (result) {
        return res.json({ kind: 'student', result , token:this.generateAccessToken(result.email) });
      }

      result = await Teacher.findOne(query)

      if (result) {
        return res.json({ kind: 'teacher', result, token:this.generateAccessToken(result.email) });
      }

    } catch (error) {
      // throw error
      console.log('error on login', error);
      return res.status(500).json({ error })
    }
  }
}
// let result = await dbo.collection("student").find(query)
// console.log("result student");
// if (result && result[0])
//   return res.json({ kind: 'student', result: result[0] });
// result = await dbo.collection("teacher").find(query)
// console.log("result teacher");
// if (result && result[0])
//   return res.json({ kind: 'teacher', result: result[0] });
// if (!result || result.length === 0)
// console.log("result no");

//   return res.status(500).send('no result');
// db.close();

//   login = (req, res) => {
//     try {
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
//       const { user, password } = req.query;
//       if (user == '' && password == '')
//         return res.json({ kind: 'admin' });
//       //Check the pwd in the server
//       console.log(user, password);
//       MongoClient.connect(url, async function (err, db) {
//         if (err) return res.status(500).send(err);
//         var dbo = db.db("mySchoolDB");
//         var query = { email: user, password };

//           let result = await dbo.collection("student").find(query)
//           if (result && result[0])
//             return res.json({ kind: 'student', result: result[0] });

//           result = await dbo.collection("teacher").find(query)
//           if (result && result[0])
//             return res.json({ kind: 'teacher', result: result[0] });

//           if (!result || result.length === 0) {
//             return res.status(500).send('no result');
//           }
//           db.close();
//         });//MongoClient
// if (result[0].password == password) {
//   // const token = this.generateAccessToken(user);
//   // console.log("token", token);
//   // return res.json({ token }).send();
//   return res.send();
// } //if
// else {
//   return res.status(401).send();
// }
//  }


//   //       });
//   // }  catch (error) {
//   //   res.status(500).send(error)
//   // }
//   //   }
//   // }

// };

// }//try
// catch (error) {
//   res.status(500).send(error)
// }//catch

// }//login


// }//Login


module.exports = new Login();