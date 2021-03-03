import { Column, Entity, Index, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { AppointmentTimes } from './appointmentTimes.entity';
import { LocationUserMapping } from './locationUserMapping.entity';

@Index('users_pkey', ['id'], { unique: true })
@Entity('users')
export class Users {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', { name: 'email', length: 255 })
  email: string;

  @Column('character varying', { name: 'first_name', length: 255 })
  firstName: string;

  @Column('character varying', { name: 'last_name', length: 255 })
  lastName: string;

  @Column('character varying', { name: 'phone_number', length: 255 })
  phoneNumber: string;

  @Column('boolean', { name: 'appointment_found', default: () => 'false' })
  appointmentFound: boolean;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @OneToMany(
    () => AppointmentTimes,
    appointmentTimes => appointmentTimes.user, {cascade: true}
  )
  appointmentTimes: AppointmentTimes[];

  @OneToMany(
    () => LocationUserMapping, 
    locationUserMapping => locationUserMapping.user, {cascade: true}
  )
  locationUserMappings: LocationUserMapping[];

}
