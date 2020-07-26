import { MigrationInterface, QueryRunner } from "typeorm";

export class user1592012796831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
                "user_name" TEXT NOT NULL,
                "password" TEXT NOT NULL,
                "mobile_token" TEXT
            );
        `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
