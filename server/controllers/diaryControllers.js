import moment from 'moment';
import Diary from '../models/diares';
import decryptEmail from '../helpers/decrept';


  const mydiaryEntry = [];

class myDiaryEntries{
  static addEntries (req, res){
    const {
      title,
      description
    } = req.body;

    const id = mydiaryEntry.length+1;
   
    const authEntry = decryptEmail(req.header('token'));
    const date = moment().format();
    
     const Entries = new Diary(id, title, date, description, authEntry);
    mydiaryEntry.push(Entries);
    
    return res.status(200).json({
      status:200,
      message:'entry successfully created',
      data:mydiaryEntry
    });



  }

}
export default myDiaryEntries;