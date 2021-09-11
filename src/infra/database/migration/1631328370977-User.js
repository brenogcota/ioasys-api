const { Table, TableForeignKey } = require('typeorm');

module.exports = class User1631328370977 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        unique: true
                    },
                    {
                        name: 'borndate',
                        type: 'date'
                    },
                    {
                        name: 'uf',
                        type: 'varchar'
                    },
                    {
                        name: 'city',
                        type: 'varchar'
                    },
                    {
                        name: 'companyId',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'positionId',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'schooling',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }), true);

            await queryRunner.createForeignKey('user', new TableForeignKey({
                columnNames: ['companyId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'company',
                onDelete: 'CASCADE'
            }));

            await queryRunner.createForeignKey('user', new TableForeignKey({
                columnNames: ['positionId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'position',
                onDelete: 'CASCADE'
            }));
    }

    async down(queryRunner) {
        const table = await queryRunner.getTable('user');
        const companyForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('companyId') !== -1);
        await queryRunner.dropForeignKey('user', companyForeignKey);
        await queryRunner.dropColumn('user', 'companyId');

        const positionForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('positionId') !== -1);
        await queryRunner.dropForeignKey('user', positionForeignKey);
        await queryRunner.dropColumn('user', 'positionId');
        await queryRunner.dropTable('user');
    }
}
        