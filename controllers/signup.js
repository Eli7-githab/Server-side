class Signup{
     signup=()=>{
        const { firstName, lastName, id, email, password } = req.body; //Adress, phone ....
        //Validations.
        //Check if user exists
        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mySchoolDB");
          var myobj = { firstName, lastName, id, email, password };
          dbo.collection("users").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
          const token = generateAccessToken(user);
          console.log("token", token);
          return res.json({ token }).send();
        });
    }
}

module.exports = Signup;