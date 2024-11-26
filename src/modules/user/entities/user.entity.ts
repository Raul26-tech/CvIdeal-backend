import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name", type: "varchar" })
  name: string;

  @Column({ name: "email", type: "varchar" })
  email: string;

  @Column({ name: "password", type: "varchar" })
  password: string;

  @Column({ name: "status", type: "varchar" })
  status: "active" | "inactive";

  @Column({ name: "cpf", type: "varchar" })
  cpf: string;

  @Column({ name: "cell_phone", type: "varchar" })
  cellPhone: string;

  @Column({ name: "phone", type: "varchar" })
  phone: string;
}
