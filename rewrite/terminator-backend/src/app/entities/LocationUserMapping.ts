import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity("location_user_mapping", { schema: "public" })
export class LocationUserMapping {
  @Column("character varying", { name: "authority_id", length: 255 })
  authorityId: string;

  @ManyToOne(() => Users, (users) => users.locationUserMappings)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
