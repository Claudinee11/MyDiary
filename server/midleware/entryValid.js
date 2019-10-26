import Joi from 'joi';

const entryValidation = (req, res, next) => {
    const entryValid = {
        title: Joi.string().strict().trim().max(60).required(),
        description: Joi.string().strict().trim().required(),

    }
    const result = Joi.validate(req.body, entryValid);
    if (result.error) {
        return res.status(400).json({
            status: 400,
            error: `${result.error.details[0].message}`
        })
    }
    next();
}

export default entryValidation;