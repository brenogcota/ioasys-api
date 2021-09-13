const { getRepository } = require('typeorm');
const User = require('../../entity/User');
const Company = require('../../entity/Company');
const Position = require('../../entity/Position');

const logger = require('../../infra/logger');

const index = async (req, res, next) => {
    try {
        const query = req.query;
        
        const keys = Object.keys(query);
        const values = Object.values(query);

        const filters = keys.map((key, index) => {
            return { 
                [key]: Like(`%${values[index]}%`)
             }
        })
        
        const { id } = req.params;
        filters.companyId = id;
        
        const userRepository = getRepository(User);
        const user = await userRepository.find({ where: filters });
    
        res.status(200).json(user);
    } catch (err) {
        logger.error(err);
        next(err);
    }
}

const create = async (req, res, next) => {
    try {
        const { userId, companyId, positionName } = req.body;

        if(positionName == 'ADMIN') res.status(401).json({ message: 'Cannot link an administrator to a company.' });

        const companyRepository = getRepository(Company);
        const company = await companyRepository.findOne({ where: { id: companyId } });
        const positionRepository = getRepository(Position);
        const position = await positionRepository.findOne({ where: { name: positionName } });

        if(!company || !position) return res.status(404).json({ message: 'Company or position names it is not valid'});

        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { id: userId } });

        if(!user) return res.status(403).json({ message: 'User does not exists.' });

        const employee = {
            companyId: company.id,
            positionId: position.id
        }

        await userRepository.update(userId, employee);
        user = await userRepository.findOne({ where: { id: userId } });
        res.status(200).json(user);
    } catch(err) {
        logger.error(err);
        next(err);
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;

        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { id } });

        if(!user) return res.status(403).json({ message: 'User does not exists.' });

        const employee = {
            companyId: null,
            positionId: null
        }

        await userRepository.update(id, employee);
        user = await userRepository.findOne({ where: { id } });
        delete user.companyId;
        delete user.positionId;
        
        res.status(200).json(user);
    } catch (err) {
        logger.error(err);
        next(err);
    }
}

module.exports = {
    index,
    create,
    remove
}