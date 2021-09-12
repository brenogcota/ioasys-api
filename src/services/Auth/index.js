const jwt = require('jsonwebtoken');
const { getRepository } = require('typeorm'); 
const User = require('../../entity/User');

const create = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userRepository = getRepository(User);
        let user = await userRepository.findOne({ where: { email } });

        if(!user) return res.json({ message: 'User does not exists.' });

        const { id } = user;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: process.env.expiresIn * 60
        });

        return res.status(200).json({ auth: true, token });
    } catch(err) {
        next(err);
    }
}

module.exports = {
    create
};