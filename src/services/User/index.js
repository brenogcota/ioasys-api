
const { getRepository, Like } = require('typeorm');
const { v4 } = require('uuid');
const User = require('../../entity/User');

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

        const userRepository = getRepository(User);
        let user = await userRepository.find({ where: filters});
    
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { name, email, borndate, uf, city, schooling } = req.body;

        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { email } });

        if(user) return res.status(403).json({ message: 'User already exists.' });

        const newUser = {
            id: v4(),
            name,
            email,
            borndate, 
            uf, 
            city, 
            schooling
        }

        user = await userRepository.save(newUser);
        delete user.id;
        delete user.created_at;
        delete user.companyId;
        delete user.positionId;

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

        if(!user) return res.status(404).json({ message: 'User does not exists.' });
    
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

        if(!user) return res.status(404).json({ message: 'User does not exists.' });
        
        await userRepository.update(id, req.body);
        user = await userRepository.findOne({ where: { id } });
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

        if(!user) return res.status(404).json({ message: 'User does not exists.' });

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