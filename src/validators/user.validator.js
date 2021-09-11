const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    uf: Joi.string()
        .min(2)
        .max(3)
        .required(),

    city: Joi.string()
        .required(),

    schooling: Joi.string()
        .valid('Superior', 'Médio').required()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    borndate: Joi.number()
        .integer()
        .min(1900)
        .max(2021),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

module.exports = schema;