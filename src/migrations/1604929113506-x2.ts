import {MigrationInterface, QueryRunner} from "typeorm";

export class x21604929113506 implements MigrationInterface {
    name = 'x21604929113506'

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "FK_e834c6ce972fbece491e9aa6115"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "FK_98c0ec209275fae24b497df909d"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD "id" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isTest"`, undefined);
    }

}
