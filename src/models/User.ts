import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "mobile_token", nullable: true, type: "text" })
  mobileToken?: string | null;

  @Column()
  password!: string;

  @Column({ name: "user_name" })
  userName!: string;
}
