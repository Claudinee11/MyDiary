
import Diaries from '../models/userModel';

import tokenGenerated from '../helpers/token';


const mydiaryUser = [];

class myDiary {
    static createAccount(req, res) {
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;
        const id = mydiaryUser.length + 1;


        const userExist = mydiaryUser.find(user => user.email === email);

        if (userExist) {
            return res.status(409).json({
                status: 409,
                error: ' email already used'
            });
        }


        const users = new Diaries(id, firstname, lastname, email, password);
        const token = tokenGenerated(email);
        mydiaryUser.push(users);
        console.log(users);

        return res.status(201).json({
            status: 201,
            message: 'creating account successfully',
            data: {
                id: mydiaryUser.id,
                token,
            }
        });
    }

    static diaryLogin(req, res) {
        const {
            email,
            password
        } = req.body;

         const userLogin = mydiaryUser.find((user) => user.email === email && user.password === password);
       
        if (!userLogin) {

            return res.status(401).json({
                status: 401,
                error: 'Invalid password or Email'
            });
        }

        const token = tokenGenerated(email);
        return res.status(201).json({
            status: 201,
            message: ' login successfully',
            data: {
                token
            }
        });
    }

}




export default myDiary;
