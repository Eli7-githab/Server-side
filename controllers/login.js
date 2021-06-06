class Login
{
    login=(req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        const { user, password } = req.query;
        //Check the pwd in the server
        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("projectDB");
          var query = { user };
          dbo.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            if (!result || result.length === 0) {
              return res.status(401).send();
            }
            db.close();
            if (result[0].password = password) {
              const token = generateAccessToken(user);
              console.log("token", token);
              return res.json({ token }).send();
            } else {
              return res.status(401).send();
            }
          });
        });
    }
}



module.exports = Login;