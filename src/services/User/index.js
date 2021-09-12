
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const User = require('../../entity/User');
const Company = require('../../entity/Company');
const Position = require('../../entity/Position');

const logger = require('../../infra/logger');

const index = async (req, res, next) => {
    try {
        const userRepository = getRepository(User);
        let user = await userRepository.find();
    
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { name, email, borndate, uf, city, schooling, companyName, positionName } = req.body;

        const companyRepository = getRepository(Company);
        const company = await companyRepository.findOne({ where: { name: companyName } });
        const positionRepository = getRepository(Position);
        const position = await positionRepository.findOne({ where: { name: positionName } });

        if(!company || !position) return res.status(404).json({ message: 'Company or position names it is not valid'});


        const userRepository = getRepository(User);
        let user = await userRepository.find({ where: { email } });

        if(user.length > 1) return res.status(403).json({ message: 'User already exists.' });

        const newUser = {
            id: v4(),
            name,
            email,
            borndate, 
            uf, 
            city, 
            schooling,
            companyId: company.id,
            positionId: position.id
        }

        user = await userRepository.save(newUser);
        delete user.id;
        delete user.created_at;

        res.status(200).json(user);

    } catch(err) {
        logger.error(err);
        next(err);
    }
}

const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { id }, relations: ['company'] });

        if(!user) return res.status(404).json({ message: 'User not exists.' });
    
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { id } });

        if(!user) return res.status(404).json({ message: 'User not exists.' });

        const properties = Object.keys(req.body);
        const values = Object.values(req.body);
        properties.map((property, index) => user[property] = values[index]);

        user = await userRepository.save(user);
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { id } });

        if(!user) return res.status(404).json({ message: 'User not exists.' });

        await userRepository.remove(user);
        return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (err) {
        next(err)
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    remove
}