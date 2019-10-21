import express from 'express';
import myDiary from '../controllers/userControllers';

const app = express.Router();


app.post('/api/v1/auth/signup', myDiary.createAccount)


export default app;