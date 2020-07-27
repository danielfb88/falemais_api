import { MigrationInterface, QueryRunner } from "typeorm";

export class Offers1595787647575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "offers" (
                "id" uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
                "name" TEXT NOT NULL,
                "simple_name" TEXT NOT NULL,
                "free_minutes" INT NOT NULL,
                "price" INT NOT NULL
            );
        `, undefined);

        await queryRunner.query(`
            INSERT INTO "offers" ("name", "simple_name", "free_minutes", "price") VALUES ('FaleMais 30', 'fm30', 30, 0);
            INSERT INTO "offers" ("name", "simple_name", "free_minutes", "price") VALUES ('FaleMais 60', 'fm60', 60, 0);
            INSERT INTO "offers" ("name", "simple_name", "free_minutes", "price") VALUES ('FaleMais 120', 'fm120', 120, 0);
        `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "offers"`, undefined);
    }

}
