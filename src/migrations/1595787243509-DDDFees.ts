import { MigrationInterface, QueryRunner } from "typeorm";

export class DDDFees1595787243509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "dddfees" (
                "id" uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
                "from_ddd" TEXT NOT NULL,
                "to_ddd" TEXT NOT NULL,
                "amount" INT NOT NULL
            );
        `, undefined);

        await queryRunner.query(`
            INSERT INTO "dddfees" ("from_ddd", "to_ddd", "amount") VALUES ('011', '016', 190);
            INSERT INTO "dddfees" ("from_ddd", "to_ddd", "amount") VALUES ('016', '011', 290);
            INSERT INTO "dddfees" ("from_ddd", "to_ddd", "amount") VALUES ('011', '017', 170);
            INSERT INTO "dddfees" ("from_ddd", "to_ddd", "amount") VALUES ('017', '011', 270);
            INSERT INTO "dddfees" ("from_ddd", "to_ddd", "amount") VALUES ('011', '018', 90);
            INSERT INTO "dddfees" ("from_ddd", "to_ddd", "amount") VALUES ('018', '011', 190);
        `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "dddfees"`, undefined);
    }

}
