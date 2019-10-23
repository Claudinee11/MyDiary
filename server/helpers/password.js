import bcrypt from 'bcrypt';
class  Diarypassword{
 static passwordHashed (password){
  return bcrypt.hash(password, 12);
}
    
    static decryptPass (password, passwordHash){
     return bcrypt.compareSync(password, passwordHash);
        
    }

}
export default Diarypassword;
