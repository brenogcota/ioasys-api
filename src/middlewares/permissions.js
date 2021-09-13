const { getRepository } = require('typeorm');
const User = require('../entity/User');
const Company = require('../entity/Company');

const isAdmin = async (req, res, next) => {
    try {
        const { userId } = req;
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['position'] });
        if(!user) return res.status(404).json({ message: 'User does not exists.' });

        const { position } = user; 
        if(!position || position.name != 'ADMIN') return res.status(401).json({ message: 'You need admin privileges to perform this action.' });
    
        next();
    } catch (error) {
        next(err)
    }
}

const isManager = async (req, res, next) => {
    try {
        const { userId } = req;

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['position'] });
        
        const { position } = user;

        if(position && (['ADMIN', 'GESTOR', 'DIRETOR'].includes(position.name))) return next();

        return res.status(401).json({ message: 'You need correctly privileges to perform this action.' });
    } catch (error) {
        next(error)
    }
}

const isManagerOrUser = async (req, res, next) => {
    try {
        const { userId } = req;
        const { id } = req.params;
        if(id == userId) return next();

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['position'] });
        
        const { position } = user;

        if(position && (['ADMIN', 'GESTOR', 'DIRETOR'].includes(position.name))) return next();

        return res.status(401).json({ message: 'You need correctly privileges to perform this action.' });
    } catch (error) {
        next(error)
    }
}

const belongsToSame = async (req, res, next) => {
    try {
        const { userId } = req;
        const { id } = req.params;

        const userRepository = getRepository(User);
        const manager = await userRepository.findOne({ where: { id: userId }, relations: ['company', 'position'] });
        
        if(manager.position && manager.position.name == 'ADMIN') return next();

        const user = await userRepository.findOne({ where: { id }, relations: ['company'] });
        if(!user) return res.status(404).json({ message: 'User does not exists.' });

        if(manager.company.id == user.company.id) return next();

        return res.status(401).json({ message: 'You cannot change users outside your company.' });
    } catch (error) {
        next(error)
    }
}

const isCompanyManager = async (req, res, next) => {
    try {
        const { userId } = req;
        const { id } = req.params;

        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId }, relations: ['company', 'position'] });
        if(!user) return res.status(404).json({ message: 'User does not exists.' });

        const { position } = user;
        if(position && position.name == 'ADMIN') return next();
        if(!position || !(['ADMIN', 'GESTOR', 'DIRETOR'].includes(position.name))) return res.status(401).json({ message: 'You need correctly privileges to perform this action.' });

        if(id == user.company.id) return next();

        return res.status(401).json({ message: 'You cannot change employeers outside your company.' });
    } catch (error) {
        next(error)
    }
}

module.exports = { 
    isAdmin,
    isManager,
    isManagerOrUser,
    belongsToSame,
    isCompanyManager
};