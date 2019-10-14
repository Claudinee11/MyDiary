
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
}
export default myDiary;