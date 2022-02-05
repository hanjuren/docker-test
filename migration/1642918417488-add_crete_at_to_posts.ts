import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addCreteAtToPosts1642918417488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('post', new TableColumn({
        name: 'post_type',
        type: 'varchar',
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('post', 'post_type');
    }

}
