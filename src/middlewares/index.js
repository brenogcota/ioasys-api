const userValidator = require('./user-validator');
const companyValidator = require('./company-validator');
const employeeValidator = require('./employee-validator');

const authMiddleware = require('./auth');
const { isAdmin, isManagerOrUser, belongsToSame, isCompanyManager } = require('./permissions');

const notFound = (req, res, next) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
}

const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: "500 - an error occurred",
        stack: process.env.NODE_ENV === 'production' ? '' : "500 - an error occurred"
    });
}

module.exports = {
    notFound,
    errorHandler,
    userValidator,
    companyValidator,
    employeeValidator,
    authMiddleware,
    isAdmin,
    isManagerOrUser,
    belongsToSame,
    isCompanyManager
}
