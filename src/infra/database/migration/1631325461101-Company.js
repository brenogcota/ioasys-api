const { Table } = require("typeorm");

module.exports = class Company1631326461101 {

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
                name: "company",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "occupation",
                        type: "varchar"
                    },
                    {
                        name: "founded_in",
                        type: "date"
                    },
                    {
                        name: "director",
                        type: "varchar"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }), true);
    }

    async down(queryRunner) {
        await queryRunner.dropTable("company");
    }
}
        