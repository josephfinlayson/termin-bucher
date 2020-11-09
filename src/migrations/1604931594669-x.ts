import {MigrationInterface, QueryRunner} from "typeorm";

export class x1604931594669 implements MigrationInterface {
    name = 'x1604931594669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" ADD CONSTRAINT "FK_98c0ec209275fae24b497df909d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "appointment_times" ADD CONSTRAINT "FK_e834c6ce972fbece491e9aa6115" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_times" DROP CONSTRAINT "FK_e834c6ce972fbece491e9aa6115"`, undefined);
        await queryRunner.query(`ALTER TABLE "location_user_mapping" DROP CONSTRAINT "FK_98c0ec209275fae24b497df909d"`, undefined);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "PK_7cc1c9e3853b94816c094825e74"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`, undefined);
    }

}
