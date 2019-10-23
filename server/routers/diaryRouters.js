import express from 'express';

import myDiaryEntries from '../controllers/diaryControllers';
import auth from '../midleware/auth';


const app = express.Router();

app.post('/api/v1/entries',auth, myDiaryEntries.addEntries);




export default app; 