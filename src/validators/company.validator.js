const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    description: Joi.string()
        .min(5)
        .max(270)
        .required(),

    occupation: Joi.string()
        .required(),

    founded_in: Joi.date()
                .required(),

    director: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
})

module.exports = schema;