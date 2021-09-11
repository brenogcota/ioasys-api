const { Table } = require('typeorm');

module.exports = class Position1631326804596 {

    async up(queryRunner) {
        await queryRunner.createTable(new Table({
                name: 'position',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    }
                ]
            }), true);
    }

    async down(queryRunner) {
        await queryRunner.dropTable('position');
    }
}
        