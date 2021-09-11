
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const Company = require('../../entity/Company');
const User = require('../../entity/User');
const logger = require('../../infra/logger');

const create = async (req, res) => {
    const { name, description, occupation, founded_in, director_email } = req.body;

    // const userRepository = getRepository(User);
    // const user = userRepository.find({ 
    //                                     where: { email: director_email },
    //                                     relations: ['position']
    //                                 });

    //logger.info(user);

    //if(!user) return res.status(404).json({ message: 'User not found.' });

    const newCompany = {
        id: v4(),
        name, 
        description, 
        occupation, 
        founded_in, 
        director_email
    }

    const companyRepository = getRepository(Company);
    const company = await companyRepository.save(newCompany);
    
    delete company.id;

    res.status(200).json(company);
}

module.exports = {
    create
}