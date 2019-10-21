import express from 'express';
import myDiary from '../controllers/userControllers';
import signupValidation from '../midleware/signupValid';
import signValidation from '../midleware/signinValid';

const app = express.Router();


app.post('/api/v1/auth/signup',signupValidation, myDiary.createAccount);
app.post('/api/v1/auth/signin',signValidation, myDiary.diaryLogin)


export default app;