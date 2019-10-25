import express from 'express';

import MyDiaryEntries from '../controllers/diaryControllers';


import auth from '../midleware/auth';


const app = express.Router();

app.post('/api/v1/entries', auth, MyDiaryEntries.addEntries);
app.get('/api/v1/entries', auth, MyDiaryEntries.getAllEntries);
app.get('/api/v1/entries/:EntriesId', auth, MyDiaryEntries.specificEntries);
app.patch('/api/v1/entries/:EntriesId', auth, MyDiaryEntries.ModifyEntry);
app.delete('/api/v1/entries/:EntriesId', auth, MyDiaryEntries.deletedEntries);






export default app; 