import { mydiaryUser } from '../controllers/userControllers';

import decryptEmail from '../helpers/decrept';

const auth = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(400).send({
      status: 400,
      error: 'please enter token',
    });
  }
  try {
    const userEntry = decryptEmail(token);
  
    const usersEntry = mydiaryUser.find(user => user.Email === userEntry.email);
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
