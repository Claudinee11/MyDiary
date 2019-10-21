import Joi from 'joi';

const signValidation = (req, res, next) => {
    const DiaryValidation = {
        email: Joi.string().strict().email().required(),
        password: Joi.string().strict().alphanum().required()
    }
    const UserDiaries = Joi.validate(req.body, DiaryValidation);
    if (UserDiaries.error) {
        return res.status(400).json({
            status: 400,
            error: `${UserDiaries.error.details[0].message}`
        })
    }
    next();
}
export default signValidation;