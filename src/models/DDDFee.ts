import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "dddfees" })
export class DDDFee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "from_ddd" })
  fromDDD!: string;

  @Column({ name: "to_ddd" })
  toDDD!: string;

  @Column()
  amount!: number;
}
