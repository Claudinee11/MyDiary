import { mydiaryUser } from '../controllers/userControllers';
// import tokenGenerated from '../helpers/token';
import decryptEmail from '../helpers/decrept';

const auth = (req, res, next) => {
  const token = req.headers.token;
  console.log(token);
  if (!token) {
    return res.status(400).send({
      status: 400,
      error: 'please enter token',
    });
  }
  try {
    console.log(token);
    const userEntry = decryptEmail(token);
    
  // const id = mydiaryUser.length+1;
  // const token = tokenGenerated(email)
    const usersEntry = mydiaryUser.find(user => user.Email === userEntry.Email);
    console.log(userEntry);
    if (!usersEntry) {
      return res.status(401).send({
        status: 401,
        error: 'please you are not user',
      });
    }

    next();
   } 
  catch (error) {
    return res.status(400).json({
      status: 400,
       error: error.message
    });
  }
}

export default auth;
