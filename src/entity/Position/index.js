const { EntitySchema } = require('typeorm');

const UserEntity = new EntitySchema({
    name: "Position", 
    tableName: "position",
    columns: {
        id: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar"
        }
     },
    relations: {
        users: {
            target: "User",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        }
    }
});

module.exports = UserEntity;