var typeorm = require("typeorm");

module.exports = typeorm.createConnection({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "test",
                password: "admin",
                database: "test",
                synchronize: true,
                entities: [
                    require("../../entity/User")
                ]
            });