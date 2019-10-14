
import diaries from '../models/diares';



class myDiary{

static viewallEntry(req, res) {
    res.status(200).send({
      status:200,
      message: 'diary retrieved successfully',
       diaries,
    });
  };
}
export default myDiary;