import {MigrationInterface, QueryRunner} from "typeorm";

export class x11604928974762 implements MigrationInterface {
    name = 'x11604928974762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "FK_8696e4e3a0ba6151ed80c06eb32"`, undefined);
        // await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "FK_018c12e4333f02ba85939984ce6"`, undefined);
        // await queryRunner.query(`ALTER TABLE "users" ADD "isTest" boolean NOT NULL DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6" PRIMARY KEY ("id")`, undefined);
        // await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "FK_98c0ec209275fae24b497df909d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        // await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "FK_e834c6ce972fbece491e9aa6115" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "FK_e834c6ce972fbece491e9aa6115"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "FK_98c0ec209275fae24b497df909d"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD "id" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isTest"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "FK_018c12e4333f02ba85939984ce6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "FK_8696e4e3a0ba6151ed80c06eb32" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
