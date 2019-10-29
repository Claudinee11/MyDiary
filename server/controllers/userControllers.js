import Diaries from '../models/userModel';
import Diarypassword from '../helpers/password';
import tokenGenerated from '../helpers/token';


export const mydiaryUser = [];

class myDiary {
    static async createAccount(req, res) {
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

        const userPassword = await Diarypassword.passwordHashed(password);
        const users = new Diaries(id, firstname, lastname, email, userPassword);

        const token = tokenGenerated(email);
        mydiaryUser.push(users);

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

        const userLogin = mydiaryUser.find((user) => (user.email === email));

        if (!userLogin) {

            return res.status(404).json({
                status: 404,
                error: 'user are not registered '
            });
        }
        if (!Diarypassword.decryptPass(password, userLogin.password)) {

            console.log(userLogin.userPassword);
            return res.status(401).json({
                status: 401,
                error: 'encorrect password '
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