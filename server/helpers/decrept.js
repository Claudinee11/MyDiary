import jwt from 'jsonwebtoken';


 const decryptEmail = (token) => {
  const userEntry = jwt.verify(token, process.env.secretkey);
  return userEntry;
}

export default decryptEmail;

