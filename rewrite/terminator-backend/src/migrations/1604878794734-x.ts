import {MigrationInterface, QueryRunner} from "typeorm";

export class x1604878794734 implements MigrationInterface {
    name = 'x1604878794734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "location_user_mapping_user_id_foreign"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "appointment_times_user_id_fkey"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "isTest" boolean NOT NULL DEFAULT false`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ALTER COLUMN "user_id" DROP NOT NULL`, undefined);

        await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "PK_34c09e194b0d55b3b2029d9e1b9" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "id_unique"`, undefined);
        // await queryRunner.query(`CREATE UNIQUE INDEX "users_pkey" ON "users" ("id") `, undefined);
        await queryRunner.query(`CREATE UNIQUE INDEX "id_unique" ON "appointment_times" ("id") `, undefined);
        // await queryRunner.query(`CREATE UNIQUE INDEX "locations_pkey" ON "locations" ("id") `, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "FK_98c0ec209275fae24b497df909d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "FK_e834c6ce972fbece491e9aa6115" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "FK_e834c6ce972fbece491e9aa6115"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "FK_98c0ec209275fae24b497df909d"`, undefined);
        await queryRunner.query(`DROP INDEX "locations_pkey"`, undefined);
        await queryRunner.query(`DROP INDEX "id_unique"`, undefined);
        await queryRunner.query(`DROP INDEX "users_pkey"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "id_unique" UNIQUE ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "PK_34c09e194b0d55b3b2029d9e1b9"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" ALTER COLUMN "id" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ALTER COLUMN "user_id" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isTest"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "PK_d5002f5abba381bcd5efb3c8fe6"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "appointment_times_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "location_user_mapping_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
