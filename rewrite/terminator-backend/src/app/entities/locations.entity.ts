import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("locations_pkey", ["id"], { unique: true })
@Entity("locations", { schema: "public" })
export class Locations {
  @PrimaryColumn("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("character varying", { name: "location_name", length: 255 })
  locationName: string;

  @Column("character varying", { name: "location_id", length: 255 })
  locationId: string;

  @Column("character varying", { name: "authority_id", length: 255 })
  authorityId: string;

  @Column("character varying", { name: "authority_name", length: 255 })
  authorityName: string;
}
