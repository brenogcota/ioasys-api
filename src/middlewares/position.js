const { getRepository } = require('typeorm');
const User = require('../entity/User');

const positionAdmin = async (req, res, next) => {
    try {
        const { userId } = req;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['position'] });
        if(!user) return res.status(404).json({ message: 'User not exists.' });

        const { position } = user; 
        if(!position || position.name != 'ADMIN') return res.status(401).json({ message: 'you need admin privileges to perform this action' });
    
        next();
    } catch (error) {
        next(err)
    }
}

const positionManagerOrUser = async (req, res, next) => {
    try {
        const { userId } = req;
        const { id } = req.params;
        if(id == userId) return next();

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['position'] });
        if(!user) return res.status(404).json({ message: 'User not exists.' });

        const { position } = user;

        if(position && (['ADMIN', 'GESTOR', 'DIRETOR'].includes(position.name))) return next();

        return res.status(401).json({ message: 'you need correctly privileges to perform this action' });
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    positionAdmin,
    positionManagerOrUser
};