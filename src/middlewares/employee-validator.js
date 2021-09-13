const Validator = require('../validators/employee.validator');

const employeeValidator = (req, res, next) => {
    const { error, value } = Validator.validate(req.body);

    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

module.exports = employeeValidator;