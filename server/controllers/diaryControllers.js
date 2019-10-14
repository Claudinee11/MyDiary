import moment from 'moment';
import diaries from '../models/diares';



class myDiary{

static viewallEntry(req, res) {
    res.status(200).send({
      status:200,
      message: 'diary retrieved successfully',
       diaries,
    });
  };

  static getspecificEntry(req, res){
    const id = parseInt(req.params.id);
    const requestedDiary = diaries.find((diary) => diary.id === id);
    if(requestedDiary) {
        return res.status(200).send({
        status:200,
        message: 'diary retrieved successfully',
        diary: requestedDiary,
    });
  }

   return res.status(404).send({
     status:404,
     message: 'diaries does not exist',
    });
  }

  static addnewEntry(req, res){
    // const { error } = validateEntry.validate(req.body);
    // if (error) {
    //   return res.status(400).json({ status: 400, error: error.details[0].message });
    // }
      const diary = {    
        id: diaries.length + 1,
      title: req.body.title,
      content:req.body.content,
      date:moment().format('LL'),
      description: req.body.description
    };
    diaries.push(diary);
    return res.status(201).send({
      status:201,
      message: 'diary added successfully',
      diaries,
    });
    };
}
export default myDiary;