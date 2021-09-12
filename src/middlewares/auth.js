const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        if(!bearerToken) return res.status(401).json({ auth: false, message: 'No token provided.' });

        const [_, token] = bearerToken.split(' ');
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.', error: err });
        
            req.userId = decoded.id;
            next();
        });

    } catch(err) {
        next(err);
    }
}

module.exports = authMiddleware;