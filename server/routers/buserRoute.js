import express from 'express';
import myDiary from '../controllers/userControllers';
import signupValidation from '../midleware/signupValid';

const app = express.Router();


app.post('/api/v1/auth/signup',signupValidation, myDiary.createAccount);
app.post('/api/v1/auth/signin',myDiary.diaryLogin)


export default app;