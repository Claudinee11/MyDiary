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
  try 
  {
    const userEntry = decryptEmail(token);
  
    const usersEntry = mydiaryUser.find(user => user.Email === userEntry.email);
    
    if (!usersEntry) {
      return res.status(401).json({
        status: 401,
        error: 'please you are not user',
      });
    }

    next();
   } 
  catch (error) {
    return res.status(500).json({
      status: 500,
       error: 'checked'
    });
  }
}

export default auth;
