
const { getRepository } = require('typeorm');
const { v4 } = require('uuid');
const Position = require('../../entity/Position');

const create = async (req, res) => {
    const { name } = req.body;
    
    const positionRepository = getRepository(Position);
    const position = await positionRepository.save({ id: v4(), name });
    
    delete position.id;

    res.status(200).json(position);
}

module.exports = {
    create
}