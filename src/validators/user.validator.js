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
        .valid('Infantil', 'Fundamental', 'Médio', 'Superior', 'Pós-graduação', 'Mestrado', 'Doutorado')
        .required(),

    borndate: Joi.date(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
})

module.exports = schema;