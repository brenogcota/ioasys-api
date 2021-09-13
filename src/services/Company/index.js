
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const Company = require('../../entity/Company');
const User = require('../../entity/User');

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

        const companyRepository = getRepository(Company);
        let company = await companyRepository.find({ where: filters});
    
        res.status(200).json(company);
    } catch (err) {
        next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const { name, description, occupation, founded_in, director } = req.body;
    
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ 
                                            where: { email: director },
                                            relations: ['position']
                                        });
        
        if(!user || user.position.name != 'DIRETOR') return res.status(404).json({ message: 'Email must belong to a director' });
    
        const newCompany = {
            id: v4(),
            name, 
            description, 
            occupation, 
            founded_in, 
            director: user.name
        }
    
        const companyRepository = getRepository(Company);
        const company = await companyRepository.save(newCompany);
        
        delete company.id;
    
        res.status(200).json(company);
    } catch (error) {
        next(error)
    }
}

const show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyRepository = getRepository(Company);
        let company = await companyRepository.findOne({ where: { id } });

        if(!company) return res.status(404).json({ message: 'Company does not exists.' });
    
        res.status(200).json(company);
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { director } = req.body || null;

        const companyRepository = getRepository(Company);
        let company = await companyRepository.findOne({ where: { id } });

        if(!company) return res.status(404).json({ message: 'Company does not exists.' });

        if(director) {
            const userRepository = getRepository(User);
            const user = await userRepository.findOne({ 
                                            where: { email: director },
                                            relations: ['position']
                                        });
        
            if(!user || user.position.name != 'DIRETOR') return res.status(404).json({ message: 'Email must belong to a director' });
            req.body.director = user.name;
        }

        await companyRepository.update(id, req.body);
        company = await companyRepository.findOne({ where: { id } });
        res.status(200).json(company);
    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyRepository = getRepository(Company);
        let company = await companyRepository.findOne({ where: { id } });

        if(!company) return res.status(404).json({ message: 'Company does not exists.' });

        await companyRepository.remove(company);
        return res.status(200).json({ message: 'Company deleted successfully.' });
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