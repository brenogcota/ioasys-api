const { EntitySchema } = require('typeorm');

const UserEntity = new EntitySchema({
    name: "User", 
    tableName: "user",
    columns: {
        id: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar"
        },
        email: {
            type: 'varchar',
            unique: true
        },
        borndate: {
            type: 'date'
        },
        uf: {
            type: 'varchar'
        },
        city: {
            type: 'varchar'
        },
        schooling: {
            type: 'varchar'
        },
        companyId: {
            type: 'varchar',
            nullable: true
        },
        positionId: {
            type: 'varchar',
            nullable: true
        },
        created_at: {
            type: 'timestamp',
            default: 'now()'
        }
     },
    relations: {
        position: {
            target: "Position",
            type: "many-to-one",
            joinTable: true,
            cascade: true
        },
        company: {
            target: "Company",
            type: "many-to-one",
            joinColumn: true,
            cascade: true
        }
    }
});

module.exports = UserEntity;