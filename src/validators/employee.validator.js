const Joi = require('joi');

const schema = Joi.object({
    userId: Joi.string()
        .required(),
    companyId: Joi.string().required(),
    positionName: Joi.string().required(),
})

module.exports = schema;