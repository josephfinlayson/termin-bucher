import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entity";

@Index("id_unique", ["id"], { unique: true })
@Entity("appointment_times")
export class AppointmentTimes {
  @Column("time without time zone", { name: "time", nullable: true })
  time: string | null;

  @Column("character varying", { name: "day", nullable: true, length: 15 })
  day: string | null;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, (users) => users.appointmentTimes)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
