const typeorm = require('typeorm');
const dbConfig = require('../config');
const User = require('../../entity/User');
const Position = require('../../entity/Position');
const Company = require('../../entity/Company');

typeorm.createConnection({
    ...dbConfig,
    synchronize: true,
    entities: [
        User,
        Position,
        Company
    ],
    migrations: ['./migration/*.js'],
    cli: {
        migrationsDir: 'migration'
    }
});