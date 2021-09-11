"use strict";

module.exports = {
    "name": "default",
    "type": "postgres",
    "host": process.env.HORT,
    "port": process.env.DB_PORT,
    "username": process.env.USER,
    "password": process.env.PASS,
    "database": process.env.DATABASE,
    "entities": [
        "src/entity/**/*.js"
    ],
    "migrations": [
        "src/infra/database/migration/**/*.js"
    ],
    "cli": {
        "migrationsDir": [
            "src/infra/database/migration/"
        ],
        "entitiesDir": "src/entity"
    }
}