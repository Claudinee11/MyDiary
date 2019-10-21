import bcrypt from 'bcrypt';


export const passwordHash= (password) => {
    bcrypt.hashSync(password, Number(process.env.passwordSorted));
}

export const decryptPassword =(password, passwordHashed) => bcrypt.compareSync(password, passwordHashed,)

