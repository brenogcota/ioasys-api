const Validator = require('../validators/user.validator');

const userValidator = (req, res, next) => {
    const { error, value } = Validator.validate(body);

    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

module.exports = userValidator;