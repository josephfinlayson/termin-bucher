import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './user.entity';

@Entity('location_user_mapping')
export class LocationUserMapping {
  @Column('varchar', { name: 'authority_id', length: 255 })
  authorityId: string;

  @ManyToOne(() => Users, users => users.locationUserMappings)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;

  @PrimaryGeneratedColumn('uuid')
  id: string
}
