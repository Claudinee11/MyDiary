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

    static deleteEntry(req, res){
      const id = parseInt(req.params.id);
   
      const diaryToDelete = diaries.find((dairy) => dairy.id === id);
      if (diaryToDelete) {
        const index = diaries.indexOf(diaryToDelete)
          diaries.splice(index, 1);
           return res.status(200).send({
             status:200,
             message: 'diary deleted successfuly',
           });
      }
    
        return res.status(404).send({
        status:404,
          message: 'diary was not found',
        });
  
    };

    static editEntry(req, res){
       const id = parseInt(req.params.id);
       let diarieFound;
       let itemIndex;
       diaries.find((dairie, index) => {
         if (dairie.id === id) {
           diarieFound = dairie;
           itemIndex = index;
         }
       });
       if (!diarieFound) {
         return res.status(404).send({
           status:404,
           message: 'diary not found',
         });
       }
     
     
       const updateddairie = {
         id: diarieFound.id,
         title: req.body.title || diarieFound.title,
         content: req.body.content || diarieFound.content,
         date:moment().format('LL') || diarieFound.date,
         description: req.body.description || diarieFound.description,
       };
     
       diaries.splice(itemIndex, 1, updateddairie);
     
       return res.status(200).send({
         status:200,
         message: 'dairy modified successfully',
         updateddairie,
       });
     };
}
export default myDiary;