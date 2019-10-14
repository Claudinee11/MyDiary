import express from 'express';

import myDiary from '../controllers/diaryControllers';

const app = express.Router();


app.get('/api/v1/entries', myDiary.viewallEntry);
app.get('/api/v1/entries/:id', myDiary.getspecificEntry);
app.post('/api/v1/entries', myDiary.addnewEntry);
app.delete('/api/v1/entries/:id', myDiary.deleteEntry);
app.put('/api/v1/entries/:id', myDiary.editEntry);


export default app; 