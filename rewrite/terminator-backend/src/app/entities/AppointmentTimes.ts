import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Index("id_unique", ["id"], { unique: true })
@Entity("appointment_times", { schema: "public" })
export class AppointmentTimes {
  @Column("time without time zone", { name: "time", nullable: true })
  time: string | null;

  @Column("character varying", { name: "day", nullable: true, length: 15 })
  day: string | null;

  @Column("uuid", { name: "id", nullable: true, unique: true })
  id: string | null;

  @ManyToOne(() => Users, (users) => users.appointmentTimes)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
