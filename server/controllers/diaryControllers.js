import moment from 'moment';
import Diary  from '../models/diares';
import decryptEmail from  '../helpers/decrept';


const mydiaryEntry= [];


class MyDiaryEntries {
  static addEntries (req, res){
    const {
      title, description,
    } = req.body;
    const date = moment().format();
    const entryAuth = decryptEmail(req.header('token'));
   const id = mydiaryEntry.length+1;
    const diaryEntries = new Diary(id, title, date, description, entryAuth);
    mydiaryEntry.push(diaryEntries);
    
    return res.status(200).send({
      status: 200, 
      message: 'User created successfully',
      data: diaryEntries
    });
  }
  static ModifyEntry (req, res)  {
    const {
      title, description,
    } = req.body;
    const { EntriesId } = req.params;
    if (isNaN(EntriesId)) {
      return res.status(400).send({
        status: 400,
        error: 'id should be a number',
      });
    }
    const entryAuth = decryptEmail(req.header('token'));

    const ModifiedEntry = mydiaryEntry.find((entry) => entry.id === parseInt(EntriesId, 10));
    if (!ModifiedEntry) {
      return res.status(404).send({
        status: 404,
        message: 'entries does not found',
      });
    }
    if (ModifiedEntry.Email !== entryAuth) {
      return res.status(403).send({
        status: 403,
        message: 'you are not user'
      });
    }

    ModifiedEntry.title = title;
    ModifiedEntry.description = description;

    return res.status(200).send({
      status: 200,
      message: 'entry successfully deleted”',
      data: ModifiedEntry,
    });
  }

 
}

export default MyDiaryEntries;
