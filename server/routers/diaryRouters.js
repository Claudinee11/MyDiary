import express from 'express';

import myDiary from '../controllers/diaryControllers';

const app = express.Router();


app.get('/api/v1/entries', myDiary.viewallEntry);


export default app; 