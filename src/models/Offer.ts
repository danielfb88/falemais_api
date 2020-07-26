import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "offers" })
export class Offer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ name: "simple_name" })
  simpleName!: string;

  @Column({ name: "free_minutes" })
  freeMinutes!: number;

  @Column()
  price!: number;
}
