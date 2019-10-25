import express from 'express';

import MyDiaryEntries from '../controllers/diaryControllers';


import auth from '../midleware/auth';


const app = express.Router();

app.post('/api/v1/entries', auth, MyDiaryEntries.addEntries);
app.get('/api/v1/entries', auth, MyDiaryEntries.getAllEntries);
app.patch('/api/v1/entries/:EntriesId', auth, MyDiaryEntries.ModifyEntry);






export default app; 