import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const tokenGenerated = (email) => jwt.sign(
    { Email:email }, process.env.secretkey,
    
    { expiresIn:'2d' });


export default tokenGenerated;
