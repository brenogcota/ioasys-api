const { EntitySchema } = require('typeorm');

const CompanyEntity = new EntitySchema({
    name: "Company", 
    tableName: "company",
    columns: {
        id: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        description: {
            type: 'varchar'
        },
        occupation: {
            type: 'varchar'
        },
        founded_in: {
            type: 'date'
        },
        director: {
            type: 'varchar'
        },
        created_at: {
            type: 'timestamp',
            default: 'now()'
        }
     },
    relations: {
        users: {
            target: "User",
            type: "one-to-many",
            cascade: true
        }
    }
});

module.exports = CompanyEntity;