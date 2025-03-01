import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum RoleStatusEnum {
  usuario = 'usuario',
  soporte = 'soporte',
  supervisor = 'supervisor',
  admin = 'admin',
}

export enum UserStatusEnum {
  active = 'active', // Activo
  deleted = 'deleted', // Borrado
  rejected = 'rejected', // Rechazado
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: RoleStatusEnum,
    default: RoleStatusEnum.usuario,
  })
  role: RoleStatusEnum;

  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    default: UserStatusEnum.active,
  })
  status?: UserStatusEnum;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  deletedAt: Date;
}
