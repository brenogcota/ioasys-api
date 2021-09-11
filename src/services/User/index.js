
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const User = require('../../entity/User');

const logger = require('../../infra/logger');

const create = async (req, res) => {
    const { name, email, borndate, uf, city, schooling } = req.body;
    const userRepository = getRepository(User);
    const user = userRepository.find({ where: { email } });

    logger.info(user);
    if(user) return res.status(404).json({ message: 'User already exists.' });

    const newUser = {
        id: v4(),
        name,
        borndate, 
        uf, 
        city, 
        schooling
    }

    await userRepository.save(newUser);
    logger.info(user);

    req.userId = user.id;
    delete user.id;

    res.status(200).json(user);
}

module.exports = {
    create
}