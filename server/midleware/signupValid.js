import Joi from 'joi';

const signupValidation = (req, res, next) => {
    const userValidation = {
        firstname: Joi.string().strict().trim().min(4).max(50).required(),
        lastname:Joi.string().strict().trim().min(4).max(50).required(),
        email: Joi.string().strict().trim().min(2).email().required(),
        password: Joi.string().alphanum().min(2).required()
    }

    const user = Joi.validate(req.body, userValidation);

    if(user.error){
        return res.status(400).json({
            status:400,
            error: `${user.error.details[0].message}`
        })
    }
    next();
}

export default signupValidation;