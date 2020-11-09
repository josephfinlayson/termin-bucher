import {MigrationInterface, QueryRunner} from "typeorm";

export class x1604929828439 implements MigrationInterface {
    name = 'x1604929828439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isTest"`, undefined);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "locations_pkey"`, undefined);
        // await queryRunner.query(`DROP INDEX "locations_pkey"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_pkey" CASCADE`, undefined);

        await queryRunner.query(`CREATE UNIQUE INDEX "users_pkey" ON "users" ("id") `, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "locations_pkey" ON "locations" ("id") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "locations_pkey"`, undefined);
        await queryRunner.query(`DROP INDEX "users_pkey"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "isTest" boolean NOT NULL DEFAULT false`, undefined);
    }

}
