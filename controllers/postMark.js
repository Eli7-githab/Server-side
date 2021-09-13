
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');
const Student=require('../models/student');
const Tests=require('../models/test')
const Lessons=require('../models/lessons') 
class PostMark {
  postMark = async(req, res) => {
    try {
      const { teacherId, marks, lessonId } = req.body;
      // lessonName =lessonId.name;
      //Validations.
      //Check if user exists

        // var myobj = { title, marks };

        // postMark(teacherId, marks:{ "test": [aredf: 90, 35fgd: 100] })
        // find by id teacher
        // Marks -> find by title
        // Teacher.marks).find(markTitle=> markTitle === title))object.keys
        // Found: push
        // Not found: new key

        // var teacher= dbo.collection("teacher").findById(teacherId,{arrMarks[title]:{ $push(myobj)}})

        // ---------
        // להגיד לו לאיזה שדא להכניס ז"א לתוך arrHw??? או שזה כבר מכניס לתוך משהו???
        // --------
        var query = { _id: ObjectId(lessonId.name) };
        // var query = { _id: ObjectId(lessonName) };
        let field = lessonId.type === "lessons" ? 'arrHw' : 'marks'
        const collection=lessonId.type === "lessons" ? Lessons:Tests
        let query2 = { ...query, [field]: { $elemMatch: { studentId: marks.id } } }
        if (await collection.findOne(query2))
          await collection.updateMany(query2, { $set: { [`${field}.$.mark`]: marks.mark } })
        else
          await collection.updateMany(query, { $addToSet: { [field]: { studentId: marks.id, mark: marks.mark } } })
        // var query = { _id:lessonId };
        // let query2 = { ...query, marks: { $elemMatch: { studentId: marks.id } } }
        // if (await dbo.collection("lessons").findOne(query2)) 
        //   await dbo.collection("lessons").update(query2, { $set: { 'marks.$.mark': marks.mark } })
        // else
        //   await dbo.collection("lessons").update(query, { $addToSet: { marks: { studentId: marks.id, mark: marks.mark } } })
        return res.send();
   
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new PostMark();

// arrMarks.less==
// {arrMarks:[{les1:
//   [{studentId:'',mark:122}]
// }]
// }

// mongodb.update