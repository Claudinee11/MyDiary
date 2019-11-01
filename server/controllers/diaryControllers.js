import moment from 'moment';
import Diary from '../models/diares';
import decryptEmail from '../helpers/decrept';


const mydiaryEntry = [];


class MyDiaryEntries {
  static addEntries(req, res) {
    const {
      title, description,
    } = req.body;
    const date = moment().format();
    const entryAuth = decryptEmail(req.header('token'));
    const id = mydiaryEntry.length + 1;
    const diaryEntries = new Diary(id, title, date, description, entryAuth);
    mydiaryEntry.push(diaryEntries);

    return res.status(201).send({
      status: 201,
      message: 'User created successfully',
      data: diaryEntries
    });
  }
  static ModifyEntry(req, res) {
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
      return res.status(404).send({
        status: 404,
        message: 'does not found'
      });
    }

    ModifiedEntry.title = title;
    ModifiedEntry.description = description;

    return res.status(200).send({
      status: 200,
      message: 'entry successfully edited',
      data: ModifiedEntry,
    });
  }

  static getAllEntries(req, res) {
    const entryAuth = decryptEmail(req.header('token'));
    mydiaryEntry.sort((a, b) => (b.EntriesId) - (a.EntriesId));
    const userEntries = mydiaryEntry.filter((entry) => entry.Email === entryAuth);
    console.log(userEntries);
    if (!userEntries.length === 0) {
      return res.status(404).send({
        status: 404,
        message: 'entry does not found',

      });
    }
    return res.status(200).send({
      status: 200,
      message: 'entries retrieved successfully',
      data: mydiaryEntry
    });
  }

  static specificEntries(req, res) {
    const { EntriesId } = req.params;
    console.log(EntriesId);
    if (isNaN(EntriesId)) {
      return res.status(400).json({
        status: 400,
        error: 'id should be a number '
      });
    }
    const entryAuth = decryptEmail(req.header('token'));
    console.log(decryptEmail);
    const specificEntry = mydiaryEntry.find((entry) => entry.id === parseInt(EntriesId, 10));
    if (!specificEntry) {
      return res.status(404).send({
        status: 404,
        message: 'entries does not found',
      });
    }
    if (specificEntry.Email !== entryAuth) {
      return res.status(404).send({
        status: 404,
        message: 'You are not user',
      });
    }
    return res.status(200).send({
      status: 200,
      message: 'entry retrieved successfully',
      data: specificEntry,
    });
  }

  static deletedEntries(req, res) {

    const { EntriesId } = req.params;
    if (isNaN(EntriesId)) {
      return res.status(400).send({
        status: 400,
        error: 'id should be a number',
      });
    }
    const entryAuth = decryptEmail(req.header('token'));
    const deletEntry = mydiaryEntry.find((entry) => entry.id === parseInt(EntriesId, 10));
    if (!deletEntry) {
      return res.status(404).send({
        status: 404,
        message: 'entries does not found',
      });
    }

    if (deletEntry.Email !== entryAuth) {
      return res.status(404).send({
        status: 404,
        message: 'You are not user',
      });
    }
    mydiaryEntry.splice(mydiaryEntry.indexOf(deletEntry), 1);
    return res.status(200).send({
      status: 200,
      message: 'entry successfully deleted',

    });
  }



}

export default MyDiaryEntries;
