import Diaries from '../models/userModel';
import {passwordHash, decryptPassord} from '../helpers/password';

import tokenGenerated from '../helpers/token';


export const mydiaryUser = [];

class myDiary{
    static createAccount(req,res){
        const{
            firstname,
            lastname,
            email,
            password
        } = req.body;

        const diaryUser = passwordHash(password);
        const EmailUsed= mydiaryUser.find((userDiary) => (userDiary.email=== email));
        if(EmailUsed){
            return res.status(409).json({
                status:409,
                error:' email already used'
            });
        }
        const users = new Diaries(mydiaryUser.length+1, firstname, lastname, email, diaryUser);
        mydiaryUser.push(users);
        const token = tokenGenerated(email);
        return res.status(201).json({
            status:201,
            message:'creating account successfully',
            data:{
                id:mydiaryUser.id,
                token,
            }
        });
    }

    static diaryLogin(req,res){
        const{
            email,
            password
        }= req.body;

        const userLogin= mydiaryUser.find((users) => (users.email===email) 
        && (decryptPassord(password, users.password)));
        if(!userLogin){
            return res.status(401).json({
                status:401,
                error:'Invalid password or Email'
            });
        }
        const token = tokenGenerated(email);
        return res.status(201).json({
            status:201,
            message: ' login successfully',
            data: {
                token
            }
        });

    }
}



export default myDiary;
