
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const User = require('../../entity/User');

const logger = require('../../infra/logger');

const create = async (req, res, next) => {
    try {
        const { name, email, borndate, uf, city, schooling, companyId, positionId } = req.body;
        const userRepository = getRepository(User);
        let user = await userRepository.find({ where: { email } });

        logger.info(user);
        if(user.length > 1) return res.status(404).json({ message: 'User already exists.' });

        const newUser = {
            id: v4(),
            name,
            email,
            borndate, 
            uf, 
            city, 
            schooling,
            companyId,
            positionId
        }

        user = await userRepository.save(newUser);
        logger.info(user);

        req.userId = user.id;
        delete user.id;
        delete user.created_at;

        res.status(200).json(user);

    } catch(err) {
        logger.error(err);
        next(err);
    }
}

module.exports = {
    create
}